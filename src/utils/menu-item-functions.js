/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/use-auth';
import { refreshIdTokenAsNeeded } from './aws-cognito-custom';

export const addIngredientToMenuItem = (
  ingredientObj,
  arrIngredientJsonWithQuantityAndUnitOfMeasure,
  arrSelectedIngredientObjs,
  setIsOneOrMoreIngredientsPendingReviewDueToNeedingPriceVerification = null,
) => {
  let isFound = false;
  for (const ingredientJson of arrIngredientJsonWithQuantityAndUnitOfMeasure) {
    if (ingredientJson.ingredientId === ingredientObj.id) {
      isFound = true;
      break;
    }
  }

  if (typeof setIsOneOrMoreIngredientsPendingReviewDueToNeedingPriceVerification === 'function') {
    if (ingredientObj?.pendingReview?.isPendingReview === true && ingredientObj?.pendingReview?.pendingReviewReason === 'not_verified') {
      setIsOneOrMoreIngredientsPendingReviewDueToNeedingPriceVerification(true);
    }
  }

  const newArrIngredientJsonWithQuantityAndUnitOfMeasure = JSON.parse(JSON.stringify(arrIngredientJsonWithQuantityAndUnitOfMeasure));
  if (!isFound) {
    newArrIngredientJsonWithQuantityAndUnitOfMeasure.push({
      ingredientId: ingredientObj.id,
      quantity: '',
      unitOfMeasure: '',
      conversionKey: '',
      isValidQuantityAndUnitOfMeasure: false,
      calculatedPriceWithoutMarkup: 0,
      costPerUnitOfMeasure: 0,
    });
  }

  let isIngredientObjFound = false;
  for (const selectedIngredientObj of arrSelectedIngredientObjs) {
    if (ingredientObj.id === selectedIngredientObj.id) {
      isIngredientObjFound = true;
      break;
    }
  }

  const newArrSelectedIngredientObjs = JSON.parse(JSON.stringify(arrSelectedIngredientObjs));
  if (!isIngredientObjFound) {
    newArrSelectedIngredientObjs.push(ingredientObj);
  }

  return {
    updatedArrIngredientJsonWithQuantityAndUnitOfMeasure: newArrIngredientJsonWithQuantityAndUnitOfMeasure,
    updatedArrSelectedIngredientObjs: newArrSelectedIngredientObjs,
  };
};

/**
 * Takes a 'unit of measure' and makes it a part of a 'conversion key,' where a conversion key
 * is nothing more than a valid property under the ingredientObj.conversions object.
 *
 * @param {string} unitOfMeasure
 * @returns string
 */
export const getConversionKey = (unitOfMeasure) => {
  const firstLetterCapitalized = unitOfMeasure?.charAt(0)?.toUpperCase();
  const remainingLetters = unitOfMeasure?.substring(1);
  return `pricePer${firstLetterCapitalized}${remainingLetters}WithTaxes`; // notice that we are using the 'WithTaxes' version. That is safe to do.
  // If the user did not include a tax rate, then the 'WithTaxes' value is the same as 'BeforeTaxes' value. However, by using the 'WithTaxes value, we are sure
  // to get the value with taxes, if a tax rate was supplied by the user, whereas the 'BeforeTaxes' would never include it and could skew our calculations.
};

/**
 * This is a helper function that is used by other functions in this file. It should not be called directly.
 *
 * @param {*} ingredientObj
 * @param {*} conversionKey
 * @returns boolean
 */
export const isValidConversionKey = (ingredientObj, conversionKey) => {
  if (ingredientObj?.conversions[conversionKey] === null || typeof ingredientObj?.conversions[conversionKey] === 'undefined' || isNaN(ingredientObj?.conversions[conversionKey])) {
    return false;
  }

  return true;
};

/**
 *
 */
export const getCostPerUnitOfMeasure = (ingredientObj, conversionKey) => ingredientObj.conversions[conversionKey];

/**
 * Iterates over all selected ingredient objects and checks whether the 'quantity' is valid and the 'unit of measure' is valid.
 *
 * A quantity must be greater than 0 to be considered valid.
 * A unit of measure is considered value if it can be used in creating a 'conversion key' that can
 * then be used on an ingredient object.
 *
 * Each element in the input array must have the following shape:
 * {
 *  ingredientId: <string>,
 *  quantity: <number>,
 *  unitOfMeasure: <string>,
 *  conversionKey: <string> (optional),
 *  isValidQuantityAndUnitOfMeasure: <boolean>,
 *  calculatedPriceWithoutMarkup: <number>,
 *  costPerUnitOfMeasure: <number>
 * }
 *
 * @return array - new array where the properties 'conversionKey' and 'isValidQuantityAndUnitOfMeasure' are populated
 */
export const validateAllIngredientRows = (arrIngredientJsonWithQuantityAndUnitOfMeasure, arrSelectedIngredientObjs) => {
  const newArrIngredientJsonWithQuantityAndUnitOfMeasure = [];
  for (const ingredientJson of arrIngredientJsonWithQuantityAndUnitOfMeasure) {
    let hasValidQuantity = false;
    let hasValidUnitOfMeasure = false;

    if (ingredientJson.quantity > 0) {
      hasValidQuantity = true;
    }

    let { conversionKey } = ingredientJson;

    for (const ingredientObj of arrSelectedIngredientObjs) {
      if (ingredientObj.id === ingredientJson.ingredientId) {
        if (!ingredientJson.conversionKey.length) {
          conversionKey = getConversionKey(ingredientJson.unitOfMeasure);
        }

        if (ingredientJson.unitOfMeasure === 'unit' && ingredientObj.conversions.pricePerUnitInPackageWithTaxes) {
          conversionKey = getConversionKey('unitInPackage');
        }
        hasValidUnitOfMeasure = isValidConversionKey(ingredientObj, conversionKey);
        break;
      }
    }

    newArrIngredientJsonWithQuantityAndUnitOfMeasure.push({
      ingredientId: ingredientJson.ingredientId,
      quantity: ingredientJson.quantity,
      unitOfMeasure: ingredientJson.unitOfMeasure,
      conversionKey,
      isValidQuantityAndUnitOfMeasure: hasValidQuantity && hasValidUnitOfMeasure,
      calculatedPriceWithoutMarkup: ingredientJson.calculatedPriceWithoutMarkup,
      costPerUnitOfMeasure: ingredientJson.costPerUnitOfMeasure,
    });
  }

  return newArrIngredientJsonWithQuantityAndUnitOfMeasure;
};

export const validateSingleIngredientRow = (ingredientId, arrIngredientJsonWithQuantityAndUnitOfMeasure, arrSelectedIngredientObjs) => {
  const newArrIngredientJsonWithQuantityAndUnitOfMeasure = [];
  // let cloneArrIngredientJsonWithQuantityAndUnitOfMeasure = JSON.parse(JSON.stringify(arrIngredientJsonWithQuantityAndUnitOfMeasure));
  for (const ingredientJson of arrIngredientJsonWithQuantityAndUnitOfMeasure) {
    let { conversionKey } = ingredientJson;
    let hasValidQuantity = false;
    let hasValidUnitOfMeasure = false;
    let isValidQuantityAndUnitOfMeasure = false;
    if (ingredientJson.ingredientId === ingredientId) {
      if (ingredientJson.quantity > 0) {
        hasValidQuantity = true;
      }

      for (const ingredientObj of arrSelectedIngredientObjs) {
        if (ingredientObj.id === ingredientJson.ingredientId) {
          if (!ingredientJson.conversionKey.length && ingredientJson.unitOfMeasure.length) {
            conversionKey = getConversionKey(ingredientJson.unitOfMeasure);
          }
          if (['unit', 'unitInPackage'].includes(ingredientJson.unitOfMeasure) && ingredientObj.conversions.pricePerUnitInPackageWithTaxes) {
            conversionKey = getConversionKey('unitInPackage');
          }
          hasValidUnitOfMeasure = isValidConversionKey(ingredientObj, conversionKey);
          break;
        }
      }

      isValidQuantityAndUnitOfMeasure = hasValidQuantity && hasValidUnitOfMeasure;
    } else {
      isValidQuantityAndUnitOfMeasure = ingredientJson.isValidQuantityAndUnitOfMeasure;
    }

    newArrIngredientJsonWithQuantityAndUnitOfMeasure.push({
      ingredientId: ingredientJson.ingredientId,
      quantity: ingredientJson.quantity,
      unitOfMeasure: ingredientJson.unitOfMeasure,
      conversionKey,
      isValidQuantityAndUnitOfMeasure,
      calculatedPriceWithoutMarkup: ingredientJson.calculatedPriceWithoutMarkup,
      costPerUnitOfMeasure: ingredientJson.costPerUnitOfMeasure,
    });
  }

  return newArrIngredientJsonWithQuantityAndUnitOfMeasure;
};

export const mapAllInvalidIngredientRowsToReasonsForBeingInvalid = (arrIngredientJsonWithQuantityAndUnitOfMeasure, arrSelectedIngredientObjs) => {
  const newArrIngredientIdsToReasonForBeingInvalidIngredientRows = [];
  for (const ingredientJson of arrIngredientJsonWithQuantityAndUnitOfMeasure) {
    const arrReasons = [];
    let hasValidQuantity = false;
    let hasValidUnitOfMeasure = false;

    if (ingredientJson.quantity.length === 0) {
      arrReasons.push('Quantity is empty string');
      // eslint-disable-next-line no-restricted-globals
    } else if (isNaN(ingredientJson.quantity)) { // Note: do not use Number.isNaN here. It will always return false even if the parameter is a string like 'abc'.
      arrReasons.push('Quantity is not a number');
    } else if (ingredientJson.quantity > 0) {
      // eslint-disable-next-line no-unused-vars
      hasValidQuantity = true;
    } else {
      arrReasons.push('Quantity is 0 or less');
    }

    let { conversionKey } = ingredientJson;
    for (const ingredientObj of arrSelectedIngredientObjs) {
      if (ingredientObj.id === ingredientJson.ingredientId) {
        if (!ingredientJson.conversionKey.length) {
          conversionKey = getConversionKey(ingredientJson.unitOfMeasure);
        }
        hasValidUnitOfMeasure = isValidConversionKey(ingredientObj, conversionKey);
        if (!ingredientJson.unitOfMeasure) {
          arrReasons.push('Unit of measure is empty');
        }
        if (!hasValidUnitOfMeasure && ingredientJson.unitOfMeasure) {
          arrReasons.push(`Invalid conversionKey: ${conversionKey}`);
        }
        break;
      }
    }

    if (arrReasons.length) {
      newArrIngredientIdsToReasonForBeingInvalidIngredientRows.push({
        [ingredientJson.ingredientId]: arrReasons,
      });
    }
  }

  return newArrIngredientIdsToReasonForBeingInvalidIngredientRows;
};

export const getElementFromArrIngredientIdsToReasonForBeingInvalidIngredientRows = (ingredientId, arrIngredientIdsToReasonForBeingInvalidIngredientRows) => {
  let arrReasons = [];
  for (const obj of arrIngredientIdsToReasonForBeingInvalidIngredientRows) {
    if (obj[ingredientId]) {
      arrReasons = obj[ingredientId];
    }
  }
  return arrReasons;
};

/**
 * This function should be called AFTER having called validateAllIngredientRows
 *
 * @param {} arrIngredientJsonWithQuantityAndUnitOfMeasure
 * @param {*} arrSelectedIngredientObjs
 */
export const calculatePriceWithoutMarkupForAllIngredientRows = (arrIngredientJsonWithQuantityAndUnitOfMeasure, arrSelectedIngredientObjs) => {
  const newArrIngredientJsonWithQuantityAndUnitOfMeasure = [];

  for (const ingredientJson of arrIngredientJsonWithQuantityAndUnitOfMeasure) {
    const clonedIngredientJson = JSON.parse(JSON.stringify(ingredientJson));
    if (clonedIngredientJson.isValidQuantityAndUnitOfMeasure) {
      for (const ingredientObj of arrSelectedIngredientObjs) {
        if (clonedIngredientJson.ingredientId === ingredientObj.id) {
          clonedIngredientJson.calculatedPriceWithoutMarkup = clonedIngredientJson.quantity * ingredientObj.conversions[clonedIngredientJson.conversionKey];
        }
      }
    } else {
      clonedIngredientJson.calculatedPriceWithoutMarkup = 0;
    }

    newArrIngredientJsonWithQuantityAndUnitOfMeasure.push(clonedIngredientJson);
  }

  return newArrIngredientJsonWithQuantityAndUnitOfMeasure;
};

export const calculatePriceWithoutMarkupForSingleIngredientRow = (ingredientId, arrIngredientJsonWithQuantityAndUnitOfMeasure, arrSelectedIngredientObjs) => {
  const newArrIngredientJsonWithQuantityAndUnitOfMeasure = [];

  for (const ingredientJson of arrIngredientJsonWithQuantityAndUnitOfMeasure) {
    let clonedIngredientJson = null;
    if (ingredientJson.ingredientId === ingredientId) {
      clonedIngredientJson = JSON.parse(JSON.stringify(ingredientJson));
      if (clonedIngredientJson.isValidQuantityAndUnitOfMeasure) {
        for (const ingredientObj of arrSelectedIngredientObjs) {
          if (clonedIngredientJson.ingredientId === ingredientObj.id) {
            clonedIngredientJson.costPerUnitOfMeasure = ingredientObj.conversions[clonedIngredientJson.conversionKey];
            clonedIngredientJson.calculatedPriceWithoutMarkup = clonedIngredientJson.quantity * ingredientObj.conversions[clonedIngredientJson.conversionKey];
          }
        }
      } else {
        clonedIngredientJson.costPerUnitOfMeasure = 0;
        clonedIngredientJson.calculatedPriceWithoutMarkup = 0;
      }
    }

    newArrIngredientJsonWithQuantityAndUnitOfMeasure.push(clonedIngredientJson || ingredientJson);
  }

  return newArrIngredientJsonWithQuantityAndUnitOfMeasure;
};

/**
 * Calculates the current 'calculated price' total.
 *
 * If there is a 'markupWholeNumber' amount that is greater than 0, it will be used in determining
 * the 'calculated price' total.
 */
export const getCalculatedPriceTotal = (arrIngredientJsonWithQuantityAndUnitOfMeasure, markupWholeNumber = 0, isIncludeMarkup = true) => {
  let calculatedPriceTotal = 0;
  for (const ingredientJson of arrIngredientJsonWithQuantityAndUnitOfMeasure) {
    if (isIncludeMarkup) {
      calculatedPriceTotal += ingredientJson.calculatedPriceWithoutMarkup + (ingredientJson.calculatedPriceWithoutMarkup * parseFloat(markupWholeNumber / 100));
    } else {
      calculatedPriceTotal += ingredientJson.calculatedPriceWithoutMarkup;
    }
  }

  return calculatedPriceTotal;
};

/**
 * Updates the quantity of a selected ingredient (aka an "ingredient row").
 *
 * This function should not be called directly. A wrapper function that does the quantity update, ingredient row validation, etc. should
 * be called instead.
 */
export const updateQuantityOfIngredientJson = (ingredientId, quantityToAssign, arrIngredientJsonWithQuantityAndUnitOfMeasure) => {
  try {
    const arrFilteredIngredientJsonWithQuantityAndUnitOfMeasure = arrIngredientJsonWithQuantityAndUnitOfMeasure.filter(ingredientJson => ingredientJson.ingredientId === ingredientId);
    if (!arrFilteredIngredientJsonWithQuantityAndUnitOfMeasure.length) {
      throw new Error(`The ingredient ID ${ingredientId} did not match to an ingredientJson in arrIngredientJsonWithQuantityAndUnitOfMeasure`);
    }

    let hasError = false;
    let errorMessage = '';
    let quantityParsed = -1;
    const quantity = quantityToAssign?.toString().trim().replace(/\s+/, '');

    // eslint-disable-next-line no-restricted-globals
    if (!hasError && isNaN(quantity)) {
      // check if the number was a fraction and was passed in as a string (e.g. "1/4" instead of 1/4)
      if (quantity.indexOf('/') !== -1) {
        const arrParts = quantity.split('/');
        if (arrParts.length > 2) {
          hasError = true;
          errorMessage = 'Please enter a valid number greater than 0. Fractions and decimal values are allowed.';
        }

        if (!hasError && arrParts.length === 2) {
          let numerator = arrParts[0]?.toString().trim().replace(/\s+/g, '');
          // eslint-disable-next-line no-restricted-globals
          if (isNaN(numerator)) {
            hasError = true;
            errorMessage = 'Please enter a valid number greater than 0. Fractions and decimal values are allowed.';
          } else {
            numerator = parseInt(numerator, 10);
          }

          let denominator = arrParts[1]?.toString().trim().replace(/\s+/g, '');
          // eslint-disable-next-line no-restricted-globals
          if (isNaN(denominator)) {
            hasError = true;
            errorMessage = 'Please enter a valid number greater than 0. Fractions and decimal values are allowed.';
          } else {
            denominator = parseInt(denominator, 10);
          }

          if (!hasError && (numerator <= 0 || denominator <= 0)) {
            hasError = true;
            errorMessage = 'Please enter a valid number greater than 0. Fractions and decimal values are allowed.';
          }

          if (!hasError) {
            quantityParsed = parseFloat(numerator / denominator);
          }
        }
      }
      // check for empty string:
      if (!hasError && quantity.length === 0) {
        hasError = true;
        errorMessage = 'Please enter a valid number greater than 0. Fractions and decimal values are allowed.';
      }
    }

    if (!hasError && quantityParsed === 0) {
      quantityParsed = parseFloat(quantity);
    }

    if (!hasError && quantityParsed > 0) {
      quantityParsed = Math.round((quantityParsed + Number.EPSILON) * 100) / 100;
    }

    let newArrIngredientJsonWithQuantityAndUnitOfMeasure = [];
    newArrIngredientJsonWithQuantityAndUnitOfMeasure = arrIngredientJsonWithQuantityAndUnitOfMeasure.map((ingredientJson) => {
      if (ingredientJson.ingredientId === ingredientId) {
        // eslint-disable-next-line no-param-reassign
        ingredientJson.quantity = quantityParsed >= 0 ? quantityParsed : quantity;
        // we have to 'reset' certain properties since we need to revalidate this ingredient row.
        // Notice that 'conversionKey' is not one of the properties that gets 'reset' in this function.
        // eslint-disable-next-line no-param-reassign
        ingredientJson.isValidQuantityAndUnitOfMeasure = false;
        // eslint-disable-next-line no-param-reassign
        ingredientJson.calculatedPriceWithoutMarkup = 0;
        // eslint-disable-next-line no-param-reassign
        ingredientJson.costPerUnitOfMeasure = 0;
      }
      return ingredientJson;
    });

    if (!hasError) {
      return {
        error: false,
        newArrIngredientJsonWithQuantityAndUnitOfMeasure,
      };
    }

    return {
      error: true,
      errorMessage,
      newArrIngredientJsonWithQuantityAndUnitOfMeasure,
    };
  } catch (err) {
    return {
      error: true,
      errorMessage: err.message,
    };
  }
};

/**
 * Updates the unit of measure of a selected ingredient (aka an "ingredient row").
 *
 * This function should not be called directly. A wrapper function that does the unit of measure update, ingredient row validation, etc. should
 * be called instead.
 */
export const updateUnitOfMeasureOfIngredientJson = (ingredientId, unitOfMeasureToAssign, arrIngredientJsonWithQuantityAndUnitOfMeasure) => {
  const arrFilteredIngredientJsonWithQuantityAndUnitOfMeasure = arrIngredientJsonWithQuantityAndUnitOfMeasure.filter(ingredientJson => ingredientJson.ingredientId === ingredientId);
  if (!arrFilteredIngredientJsonWithQuantityAndUnitOfMeasure.length) {
    throw new Error(`The ingredient ID ${ingredientId} did not match to an ingredientJson in arrIngredientJsonWithQuantityAndUnitOfMeasure`);
  }

  const newArrIngredientJsonWithQuantityAndUnitOfMeasure = arrIngredientJsonWithQuantityAndUnitOfMeasure.map((ingredientJson) => {
    if (ingredientJson.ingredientId === ingredientId) {
      // eslint-disable-next-line no-param-reassign
      ingredientJson.unitOfMeasure = unitOfMeasureToAssign;
      // we have to 'reset' certain properties since we need to revalidate this ingredient row.
      // eslint-disable-next-line no-param-reassign
      ingredientJson.conversionKey = '';
      // eslint-disable-next-line no-param-reassign
      ingredientJson.isValidQuantityAndUnitOfMeasure = false;
      // eslint-disable-next-line no-param-reassign
      ingredientJson.calculatedPriceWithoutMarkup = 0;
      // eslint-disable-next-line no-param-reassign
      ingredientJson.costPerUnitOfMeasure = 0;
    }
    return ingredientJson;
  });

  return {
    error: false,
    newArrIngredientJsonWithQuantityAndUnitOfMeasure,
  };
};

/**
 * This is the wrapper function to call when updating the quantity of an 'ingredient row'.
 */
export const updateQuantityOfIngredientJsonWrapper = (
  ingredientId,
  quantityToAssign,
  arrIngredientJsonWithQuantityAndUnitOfMeasure,
  arrSelectedIngredientObjs,
  funcToUpdateArrIngredientJsonWithQuantityAndUnitOfMeasure,
) => {
  let responseValue = false;
  // 1. Update the quantity of the ingredient row
  const responseUpdateQuantityOfIngredientJson = updateQuantityOfIngredientJson(ingredientId, quantityToAssign, arrIngredientJsonWithQuantityAndUnitOfMeasure);
  // if (responseUpdateQuantityOfIngredientJson.error === false) {
  for (const ingredientJson of responseUpdateQuantityOfIngredientJson.newArrIngredientJsonWithQuantityAndUnitOfMeasure) {
    if (ingredientJson.ingredientId === ingredientId) {
      // 2. Check if the ingredient row is now 'valid':
      const validatedArrIngredientJsonWithQuantityAndUnitOfMeasure = validateSingleIngredientRow(
        ingredientId,
        responseUpdateQuantityOfIngredientJson.newArrIngredientJsonWithQuantityAndUnitOfMeasure,
        arrSelectedIngredientObjs,
      );

      // 3. Update its calculated price:
      const calculatedPriceUpdatedArrIngredientJsonWithQuantityAndUnitOfMeasure = calculatePriceWithoutMarkupForSingleIngredientRow(
        ingredientId,
        validatedArrIngredientJsonWithQuantityAndUnitOfMeasure,
        arrSelectedIngredientObjs,
      );

      // 4. Update state
      funcToUpdateArrIngredientJsonWithQuantityAndUnitOfMeasure(calculatedPriceUpdatedArrIngredientJsonWithQuantityAndUnitOfMeasure);

      responseValue = true;
    }
  }
  // }

  return responseValue;
};

/**
 * This is the wrapper function to call when updating the unit of measure of an 'ingredient row'.
 */
export const updateUnitOfMeasureOfIngredientJsonWrapper = (
  ingredientId,
  unitOfMeasureToAssign,
  arrIngredientJsonWithQuantityAndUnitOfMeasure,
  arrSelectedIngredientObjs,
  funcToUpdateArrIngredientJsonWithQuantityAndUnitOfMeasure,
) => {
  let responseValue = false;
  const responseUpdateUnitOfMeasureOfIngredientJson = updateUnitOfMeasureOfIngredientJson(ingredientId, unitOfMeasureToAssign, arrIngredientJsonWithQuantityAndUnitOfMeasure);
  if (responseUpdateUnitOfMeasureOfIngredientJson.error === false) {
    for (const ingredientJson of responseUpdateUnitOfMeasureOfIngredientJson.newArrIngredientJsonWithQuantityAndUnitOfMeasure) {
      if (ingredientJson.ingredientId === ingredientId) {
        // 2. Check if the ingredient row is now 'valid':
        const validatedArrIngredientJsonWithQuantityAndUnitOfMeasure = validateSingleIngredientRow(
          ingredientId,
          responseUpdateUnitOfMeasureOfIngredientJson.newArrIngredientJsonWithQuantityAndUnitOfMeasure,
          arrSelectedIngredientObjs,
        );

        // 3. Update its calculated price:
        const calculatedPriceUpdatedArrIngredientJsonWithQuantityAndUnitOfMeasure = calculatePriceWithoutMarkupForSingleIngredientRow(
          ingredientId,
          validatedArrIngredientJsonWithQuantityAndUnitOfMeasure,
          arrSelectedIngredientObjs,
        );

        // 4. Update state
        funcToUpdateArrIngredientJsonWithQuantityAndUnitOfMeasure(calculatedPriceUpdatedArrIngredientJsonWithQuantityAndUnitOfMeasure);

        responseValue = true;
      }
    }
  }

  return responseValue;
};

/**
 * Removes a single ingredient from being used in evaluating the calculated price of a menu item.
 */
export const removeIngredientFromCalculatedPrice = (
  ingredientId,
  arrIngredientJsonWithQuantityAndUnitOfMeasure,
  arrSelectedIngredientObjs,
  funcToUpdateArrIngredientJsonWithQuantityAndUnitOfMeasure,
  funcToUpdateArrSelectedIngredients,
  funcToSetIsOneOrMoreIngredientsPendingReviewDueToNeedingPriceVerification = null,
) => {
  const filteredArrIngredientJsonWithQuantityAndUnitOfMeasure = arrIngredientJsonWithQuantityAndUnitOfMeasure.filter(ingredientJson => ingredientJson.ingredientId !== ingredientId);
  const filteredArrSelectedIngredientObjs = arrSelectedIngredientObjs.filter(ingredientObj => ingredientObj.id !== ingredientId);

  let isOneOrMoreIngredientsPendingReviewDueToNeedingPriceVerification = false;
  for (const ingredientObj of filteredArrSelectedIngredientObjs) {
    if (ingredientObj?.pendingReview?.isPendingReview === true && ingredientObj?.pendingReview?.pendingReviewReason === 'not_verified') {
      isOneOrMoreIngredientsPendingReviewDueToNeedingPriceVerification = true;
    }
  }

  if (typeof funcToSetIsOneOrMoreIngredientsPendingReviewDueToNeedingPriceVerification === 'function') {
    funcToSetIsOneOrMoreIngredientsPendingReviewDueToNeedingPriceVerification(isOneOrMoreIngredientsPendingReviewDueToNeedingPriceVerification);
  }

  funcToUpdateArrIngredientJsonWithQuantityAndUnitOfMeasure(filteredArrIngredientJsonWithQuantityAndUnitOfMeasure);
  funcToUpdateArrSelectedIngredients(filteredArrSelectedIngredientObjs);
};

export const updatePricePerUnitOrPerTablespoonOfIngredient = async (
  ingredientObj,
  perUnitWeightInGrams,
  perTablespoonWeightInGrams,
  arrIngredientJsonWithQuantityAndUnitOfMeasure,
  arrSelectedIngredientObjs,
  funcToUpdateArrIngredientJsonWithQuantityAndUnitOfMeasure,
  funcToUpdateArrSelectedIngredients,
) => {
  const { logout } = useAuth();
  const router = useRouter();
  const cloneIngredientObj = JSON.parse(JSON.stringify(ingredientObj));
  if (perUnitWeightInGrams !== null) {
    if (cloneIngredientObj.unitSoldBy.activeSelection === 'weight') {
      cloneIngredientObj.unitSoldBy.weight.perUnitWeightInGrams = perUnitWeightInGrams;
    } else if (cloneIngredientObj.unitSoldBy.activeSelection === 'package' && cloneIngredientObj.unitSoldBy.package.activeSelection === 'packageContainsFixedWeightOfTheIngredient') {
      cloneIngredientObj.unitSoldBy.package.packageContainsFixedWeightOfTheIngredient.perUnitWeightInGrams = perUnitWeightInGrams;
    } else if (cloneIngredientObj.unitSoldBy.activeSelection === 'package' && cloneIngredientObj.unitSoldBy.package.activeSelection === 'packageContainsCountOfIndividualUnitsOfTheIngredient') {
      cloneIngredientObj.unitSoldBy.package.packageContainsCountOfIndividualUnitsOfTheIngredient.perUnitWeightInGrams = perUnitWeightInGrams;
    } else if (cloneIngredientObj.unitSoldBy.activeSelection === 'volume' && cloneIngredientObj.unitSoldBy.volume.activeSelection === 'volumeContainsAFixedWeightOfIngredient') {
      cloneIngredientObj.unitSoldBy.volume.volumeContainsAFixedWeightOfIngredient.perUnitWeightInGrams = perUnitWeightInGrams;
    } else if (cloneIngredientObj.unitSoldBy.activeSelection === 'volume' && cloneIngredientObj.unitSoldBy.volume.activeSelection === 'volumeDoesNotContainAFixedWeightOfIngredient') {
      cloneIngredientObj.unitSoldBy.volumeDoesNotContainAFixedWeightOfIngredient.perUnitWeightInGrams = perUnitWeightInGrams;
    } else if (cloneIngredientObj.unitSoldBy.activeSelection === 'fruitsAndVegetables' && cloneIngredientObj.unitSoldBy.fruitsAndVegetables.isIngredientAddedToMenuItemOnAPerUnitBasis) {
      cloneIngredientObj.unitSoldBy.fruitsAndVegetables.perUnitWeightInGrams = perUnitWeightInGrams;
    }
  }

  if (perTablespoonWeightInGrams !== null) {
    if (cloneIngredientObj.unitSoldBy.activeSelection === 'weight') {
      cloneIngredientObj.unitSoldBy.weight.tablespoonOfIngredientWeightInGrams = perTablespoonWeightInGrams;
    } else if (cloneIngredientObj.unitSoldBy.activeSelection === 'package' && cloneIngredientObj.unitSoldBy.package.activeSelection === 'packageContainsFixedWeightOfTheIngredient') {
      cloneIngredientObj.unitSoldBy.package.packageContainsFixedWeightOfTheIngredient.tablespoonOfIngredientWeightInGrams = perTablespoonWeightInGrams;
    } else if (cloneIngredientObj.unitSoldBy.activeSelection === 'package' && cloneIngredientObj.unitSoldBy.package.activeSelection === 'packageContainsCountOfIndividualUnitsOfTheIngredient') {
      cloneIngredientObj.unitSoldBy.package.packageContainsCountOfIndividualUnitsOfTheIngredient.tablespoonOfIngredientWeightInGrams = perTablespoonWeightInGrams;
    } else if (cloneIngredientObj.unitSoldBy.activeSelection === 'volume' && cloneIngredientObj.unitSoldBy.volume.activeSelection === 'volumeContainsAFixedWeightOfIngredient') {
      cloneIngredientObj.unitSoldBy.volume.volumeContainsAFixedWeightOfIngredient.tablespoonOfIngredientWeightInGrams = perTablespoonWeightInGrams;
    } else if (cloneIngredientObj.unitSoldBy.activeSelection === 'volume' && cloneIngredientObj.unitSoldBy.volume.activeSelection === 'volumeDoesNotContainAFixedWeightOfIngredient') {
      cloneIngredientObj.unitSoldBy.volumeDoesNotContainAFixedWeightOfIngredient.tablespoonOfIngredientWeightInGrams = perTablespoonWeightInGrams;
    } else if (cloneIngredientObj.unitSoldBy.activeSelection === 'fruitsAndVegetables' && cloneIngredientObj.unitSoldBy.fruitsAndVegetables.isIngredientAddedToMenuItemOnAPerUnitBasis) {
      cloneIngredientObj.unitSoldBy.fruitsAndVegetables.tablespoonOfIngredientWeightInGrams = perTablespoonWeightInGrams;
    }
  }

  const payload = cloneIngredientObj;

  if (typeof payload.compoundIngredient === 'undefined') {
    payload.compoundIngredient = {
      yieldQuantity: '',
      yieldUnitOfMeasure: '',
      priceBeforeTaxes: '',
      compoundIngredientJsons: [],
    };
  } else {
    payload.compoundIngredient.compoundIngredientJsons = payload.compoundIngredient.compoundIngredientJsons.filter(elem => elem !== '');
  }

  if (typeof payload.isCompoundIngredient === 'undefined') {
    payload.isCompoundIngredient = false;
  }

  const activeOrganization = typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('activeOrganization')) : null;

  const hasIdToken = await refreshIdTokenAsNeeded();
  if (!hasIdToken) {
    logout();
    // eslint-disable-next-line no-console
    router.push('/').catch(console.error);
  }
  const response = await axios.post(
    process.env.NEXT_PUBLIC_INGREDIENT_ADD_ENDPOINT,
    payload,
    {
      headers: {
        Authorization: getCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN),
        'Organization-Id': activeOrganization?.id,
      },
    },
  ).catch((error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 401) {
        logout();
        router.push('/').catch(console.error);
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
    } else {
      // Something happened in setting up the request that triggered an Error
    }
  });

  let cloneArrIngredientJsonWithQuantityAndUnitOfMeasure = JSON.parse(JSON.stringify(arrIngredientJsonWithQuantityAndUnitOfMeasure));
  let cloneArrSelectedIngredientObjs = JSON.parse(JSON.stringify(arrSelectedIngredientObjs));

  cloneArrSelectedIngredientObjs = cloneArrSelectedIngredientObjs.map((ingredientObjItem) => {
    if (ingredientObjItem.id === response.data.item.id) {
      ingredientObjItem = JSON.parse(JSON.stringify(response.data.item));
    }

    return ingredientObjItem;
  });

  // IMPORTANT: the call to validateAllIngredientRows() needs to happen before the call to
  // calculatePriceWithoutMarkupForSingleIngredientRow() because the latter function will
  // expect that the isValidQuantityAndUnitOfMeasure to be true to do the price calculation

  cloneArrIngredientJsonWithQuantityAndUnitOfMeasure = validateAllIngredientRows(
    cloneArrIngredientJsonWithQuantityAndUnitOfMeasure,
    cloneArrSelectedIngredientObjs,
  );

  cloneArrIngredientJsonWithQuantityAndUnitOfMeasure = calculatePriceWithoutMarkupForSingleIngredientRow(
    cloneIngredientObj.id,
    cloneArrIngredientJsonWithQuantityAndUnitOfMeasure,
    cloneArrSelectedIngredientObjs,
  );

  if (typeof funcToUpdateArrSelectedIngredients === 'function') {
    funcToUpdateArrSelectedIngredients(cloneArrSelectedIngredientObjs);
  }

  if (typeof funcToUpdateArrIngredientJsonWithQuantityAndUnitOfMeasure === 'function') {
    funcToUpdateArrIngredientJsonWithQuantityAndUnitOfMeasure(cloneArrIngredientJsonWithQuantityAndUnitOfMeasure);
  }
};

export const addMenuItemToCombo = (menuItemObj, arrMenuItemJsonWithQuantityAndUnitOfMeasure, arrSelectedMenuItemObjs) => {
  let isFound = false;
  for (const menuItemJson of arrMenuItemJsonWithQuantityAndUnitOfMeasure) {
    if (menuItemJson.menuItemId === menuItemObj.id) {
      isFound = true;
      break;
    }
  }

  const newArrMenuItemJsonWithQuantityAndUnitOfMeasure = JSON.parse(JSON.stringify(arrMenuItemJsonWithQuantityAndUnitOfMeasure));
  if (!isFound) {
    newArrMenuItemJsonWithQuantityAndUnitOfMeasure.push({
      menuItemId: menuItemObj.id,
      unitOfMeasure: '',
      isValidMenuItemPortionSize: false,
      explicitlySetPrice: menuItemObj.explicitlySetPrice || 0,
      calculatedPriceWithoutMarkup: menuItemObj.calculatedPriceOfMenuItemWithoutMarkup || 0,
      costPerUnitOfMeasure: 0,
    });
  }

  let isMenuItemObjFound = false;
  for (const selectedMenuItemObj of arrSelectedMenuItemObjs) {
    if (menuItemObj.id === selectedMenuItemObj.id) {
      isMenuItemObjFound = true;
      break;
    }
  }

  const newArrSelectedMenuItemObjs = JSON.parse(JSON.stringify(arrSelectedMenuItemObjs));
  if (!isMenuItemObjFound) {
    newArrSelectedMenuItemObjs.push(menuItemObj);
  }

  return {
    updatedArrMenuItemJsonWithQuantityAndUnitOfMeasure: newArrMenuItemJsonWithQuantityAndUnitOfMeasure,
    updatedArrSelectedMenuItemObjs: newArrSelectedMenuItemObjs,
  };
};

// eslint-disable-next-line no-unused-vars
export const mapAllInvalidMenuItemRowsToReasonsForBeingInvalid = (arrMenuItemJsonWithQuantityAndUnitOfMeasure, arrSelectedMenuItemObjs) => {
  const newArrMenuItemIdsToReasonForBeingInvalidMenuItemRows = [];
  for (const menuItemJson of arrMenuItemJsonWithQuantityAndUnitOfMeasure) {
    const arrReasons = [];
    for (const menuItemObj of arrSelectedMenuItemObjs) {
      if (menuItemObj.id === menuItemJson.menuItemId) {
        if (!menuItemJson.unitOfMeasure) {
          arrReasons.push('Unit of measure is empty');
        }
        break;
      }
    }

    if (arrReasons.length) {
      newArrMenuItemIdsToReasonForBeingInvalidMenuItemRows.push({
        [menuItemJson.menuItemId]: arrReasons,
      });
    }
  }

  return newArrMenuItemIdsToReasonForBeingInvalidMenuItemRows;
};

/**
 * Calculates the current 'calculated price' total of menu items.
 *
 * If there is a 'markupWholeNumber' amount that is greater than 0, it will be used in determining
 * the 'calculated price' total.
 */
export const getCalculatedPriceTotalOfMenuItems = (arrMenuItemJsonWithQuantityAndUnitOfMeasure, markupWholeNumber = 0, isIncludeMarkup = true) => {
  let calculatedPriceTotal = 0;
  for (const menuItemJson of arrMenuItemJsonWithQuantityAndUnitOfMeasure) {
    if (isIncludeMarkup) {
      calculatedPriceTotal += menuItemJson.costPerUnitOfMeasure + (menuItemJson.costPerUnitOfMeasure * parseFloat(markupWholeNumber / 100));
    } else {
      calculatedPriceTotal += menuItemJson.costPerUnitOfMeasure;
    }
  }
  return calculatedPriceTotal;
};

/**
 * Removes a single menu item from being used in evaluating the calculated price of a menu item combo.
 */
export const removeMenuItemFromCalculatedPrice = (
  menuItemId,
  arrMenuItemJsonWithQuantityAndUnitOfMeasure,
  arrSelectedMenuItemObjs,
  funcToUpdateArrMenuItemJsonWithQuantityAndUnitOfMeasure,
  funcToUpdateArrSelectedMenuItems,
) => {
  const filteredArrMenuItemJsonWithQuantityAndUnitOfMeasure = arrMenuItemJsonWithQuantityAndUnitOfMeasure.filter(menuItemJson => menuItemJson.menuItemId !== menuItemId);
  const filteredArrSelectedMenuItemObjs = arrSelectedMenuItemObjs.filter(menuItemObj => menuItemObj.id !== menuItemId);

  funcToUpdateArrMenuItemJsonWithQuantityAndUnitOfMeasure(filteredArrMenuItemJsonWithQuantityAndUnitOfMeasure);
  funcToUpdateArrSelectedMenuItems(filteredArrSelectedMenuItemObjs);
};

export const getElementFromArrMenuItemIdsToReasonForBeingInvalidMenuItemRows = (menuItemId, arrMenuItemIdsToReasonForBeingInvalidMenuItemRows) => {
  let arrReasons = [];
  for (const obj of arrMenuItemIdsToReasonForBeingInvalidMenuItemRows) {
    if (obj[menuItemId]) {
      arrReasons = obj[menuItemId];
    }
  }
  return arrReasons;
};

export const validateSingleMenuItemRow = (menuItemId, arrMenuItemJsonWithQuantityAndUnitOfMeasure, arrSelectedMenuItemObjs) => {
  const newArrMenuItemJsonWithQuantityAndUnitOfMeasure = [];
  // let cloneArrIngredientJsonWithQuantityAndUnitOfMeasure = JSON.parse(JSON.stringify(arrMenuItemJsonWithQuantityAndUnitOfMeasure));
  for (const menuItemJson of arrMenuItemJsonWithQuantityAndUnitOfMeasure) {
    let hasValidUnitOfMeasure = false;
    let isValidMenuItemPortionSize = false;
    if (menuItemJson.menuItemId === menuItemId) {
      for (const menuItemObj of arrSelectedMenuItemObjs) {
        if (menuItemObj.id === menuItemJson.menuItemId) {
          // eslint-disable-next-line no-use-before-define
          hasValidUnitOfMeasure = isValidConversionKeyMenuItem(menuItemJson);
          break;
        }
      }

      isValidMenuItemPortionSize = hasValidUnitOfMeasure;
    } else {
      isValidMenuItemPortionSize = menuItemJson.isValidMenuItemPortionSize;
    }

    newArrMenuItemJsonWithQuantityAndUnitOfMeasure.push({
      menuItemId: menuItemJson.menuItemId,
      unitOfMeasure: menuItemJson.unitOfMeasure,
      isValidMenuItemPortionSize,
      explicitlySetPrice: menuItemJson.explicitlySetPrice,
      calculatedPriceWithoutMarkup: menuItemJson.calculatedPriceWithoutMarkup,
      costPerUnitOfMeasure: menuItemJson.costPerUnitOfMeasure,
    });
  }

  return newArrMenuItemJsonWithQuantityAndUnitOfMeasure;
};

export const calculatePriceWithoutMarkupForSingleMenuItemRow = (menuItemId, arrMenuItemJsonWithQuantityAndUnitOfMeasure, arrSelectedMenuItemObjs) => {
  const newArrMenuItemJsonWithQuantityAndUnitOfMeasure = [];

  for (const menuItemJson of arrMenuItemJsonWithQuantityAndUnitOfMeasure) {
    let clonedMenuItemJson = null;
    if (menuItemJson.menuItemId === menuItemId) {
      clonedMenuItemJson = JSON.parse(JSON.stringify(menuItemJson));
      if (clonedMenuItemJson.isValidMenuItemPortionSize) {
        for (const menuItemObj of arrSelectedMenuItemObjs) {
          if (clonedMenuItemJson.menuItemId === menuItemObj.id) {
            // eslint-disable-next-line no-use-before-define
            clonedMenuItemJson.costPerUnitOfMeasure = getCostPerUnitOfMeasureMenuItem(menuItemObj, clonedMenuItemJson.unitOfMeasure);
            clonedMenuItemJson.calculatedPriceWithoutMarkup = menuItemObj.calculatedPriceOfMenuItemWithoutMarkup;
            clonedMenuItemJson.explicitlySetPrice = menuItemObj.explicitlySetPrice;
          }
        }
      } else {
        clonedMenuItemJson.costPerUnitOfMeasure = 0;
        clonedMenuItemJson.calculatedPriceWithoutMarkup = 0;
        clonedMenuItemJson.explicitlySetPrice = 0;
      }
    }

    newArrMenuItemJsonWithQuantityAndUnitOfMeasure.push(clonedMenuItemJson || menuItemJson);
  }
  return newArrMenuItemJsonWithQuantityAndUnitOfMeasure;
};

/**
 * Takes a 'unit of measure' and makes it a part of a 'conversion key,' where a conversion key
 * is nothing more than a valid property under the ingredientObj.conversions object.
 *
 * @param {string} unitOfMeasure
 * @returns string
 */
export const getConversionKeyMenuItem = (unitOfMeasure) => {
  const firstLetterCapitalized = unitOfMeasure?.charAt(0)?.toUpperCase();
  const remainingLetters = unitOfMeasure?.substring(1);
  return `pricePer${firstLetterCapitalized}${remainingLetters}WithTaxes`; // notice that we are using the 'WithTaxes' version. That is safe to do.
  // If the user did not include a tax rate, then the 'WithTaxes' value is the same as 'BeforeTaxes' value. However, by using the 'WithTaxes value, we are sure
  // to get the value with taxes, if a tax rate was supplied by the user, whereas the 'BeforeTaxes' would never include it and could skew our calculations.
};

/**
 * This is a helper function that is used by other functions in this file. It should not be called directly.
 *
 * @param {*} ingredientObj
 * @returns boolean
 */
export const isValidConversionKeyMenuItem = (menuItemObj) => {
  const arrValidMenuItemServingSizes = [
    'quarter',
    'third',
    'half',
    'two_thirds',
    'three_quarters',
    'whole_serving',
  ];
  if (!arrValidMenuItemServingSizes.includes(menuItemObj.unitOfMeasure)) {
    return false;
  }

  return true;
};

/**
 *
 */
export const getCostPerUnitOfMeasureMenuItem = (menuItemObj, servingSize) => {
  switch (servingSize) {
    case 'quarter':
      if (menuItemObj.explicitlySetPrice) {
        return 0.25 * menuItemObj.explicitlySetPrice;
      }
      return 0.25 * menuItemObj.calculatedPriceOfMenuItemWithoutMarkup;

    case 'third':
      if (menuItemObj.explicitlySetPrice) {
        return 0.33 * menuItemObj.explicitlySetPrice;
      }
      return 0.33 * menuItemObj.calculatedPriceOfMenuItemWithoutMarkup;

    case 'half':
      if (menuItemObj.explicitlySetPrice) {
        return 0.5 * menuItemObj.explicitlySetPrice;
      }
      return 0.5 * menuItemObj.calculatedPriceOfMenuItemWithoutMarkup;

    case 'two_thirds':
      if (menuItemObj.explicitlySetPrice) {
        return 0.66 * menuItemObj.explicitlySetPrice;
      }
      return 0.66 * menuItemObj.calculatedPriceOfMenuItemWithoutMarkup;

    case 'three_quarters':
      if (menuItemObj.explicitlySetPrice) {
        return 0.75 * menuItemObj.explicitlySetPrice;
      }
      return 0.75 * menuItemObj.calculatedPriceOfMenuItemWithoutMarkup;

    case 'whole_serving':
      if (menuItemObj.explicitlySetPrice) {
        return 1 * menuItemObj.explicitlySetPrice;
      }
      return 1 * menuItemObj.calculatedPriceOfMenuItemWithoutMarkup;

    default:
      throw new Error(`The desired 'servingSize' value of ${servingSize} was not matched`);
  }
};

/**
 * Updates the unit of measure of a selected menu item (aka a "menu item row").
 *
 * This function should not be called directly. A wrapper function that does the unit of measure update, menu item row validation, etc. should
 * be called instead.
 */
export const updateUnitOfMeasureOfMenuItemJson = (menuItemId, unitOfMeasureToAssign, arrMenuItemJsonWithQuantityAndUnitOfMeasure) => {
  const arrFilteredMenuItemJsonWithQuantityAndUnitOfMeasure = arrMenuItemJsonWithQuantityAndUnitOfMeasure.filter(menuItemJson => menuItemJson.menuItemId === menuItemId);
  if (!arrFilteredMenuItemJsonWithQuantityAndUnitOfMeasure.length) {
    throw new Error(`The menu item ID ${menuItemId} did not match to an menuItemJson in arrMenuItemJsonWithQuantityAndUnitOfMeasure`);
  }

  const newArrMenuItemJsonWithQuantityAndUnitOfMeasure = arrMenuItemJsonWithQuantityAndUnitOfMeasure.map((menuItemJson) => {
    if (menuItemJson.menuItemId === menuItemId) {
      menuItemJson.unitOfMeasure = unitOfMeasureToAssign;
      // we have to 'reset' certain properties since we need to revalidate this ingredient row.
      menuItemJson.isValidMenuItemPortionSize = false;
      menuItemJson.calculatedPriceWithoutMarkup = 0;
      menuItemJson.explicitlySetPrice = 0;
      menuItemJson.costPerUnitOfMeasure = 0;
    }
    return menuItemJson;
  });

  return {
    error: false,
    newArrMenuItemJsonWithQuantityAndUnitOfMeasure,
  };
};

/**
 * This is the wrapper function to call when updating the unit of measure of a 'menu item row'.
 */
export const updateUnitOfMeasureOfMenuItemJsonWrapper = (
  menuItemId,
  unitOfMeasureToAssign,
  arrMenuItemJsonWithQuantityAndUnitOfMeasure,
  arrSelectedMenuItemObjs,
  funcToUpdateArrMenuItemJsonWithQuantityAndUnitOfMeasure,
) => {
  let responseValue = false;
  const responseUpdateUnitOfMeasureOfMenuItemJson = updateUnitOfMeasureOfMenuItemJson(menuItemId, unitOfMeasureToAssign, arrMenuItemJsonWithQuantityAndUnitOfMeasure);
  if (responseUpdateUnitOfMeasureOfMenuItemJson.error === false) {
    for (const menuItemJson of responseUpdateUnitOfMeasureOfMenuItemJson.newArrMenuItemJsonWithQuantityAndUnitOfMeasure) {
      if (menuItemJson.menuItemId === menuItemId) {
        // 2. Check if the ingredient row is now 'valid':
        const validatedArrMenuItemJsonWithQuantityAndUnitOfMeasure = validateSingleMenuItemRow(
          menuItemId,
          responseUpdateUnitOfMeasureOfMenuItemJson.newArrMenuItemJsonWithQuantityAndUnitOfMeasure,
          arrSelectedMenuItemObjs,
        );

        // 3. Update its calculated price:
        const calculatedPriceUpdatedArrMenuItemJsonWithQuantityAndUnitOfMeasure = calculatePriceWithoutMarkupForSingleMenuItemRow(
          menuItemId,
          validatedArrMenuItemJsonWithQuantityAndUnitOfMeasure,
          arrSelectedMenuItemObjs,
        );

        // 4. Update state
        funcToUpdateArrMenuItemJsonWithQuantityAndUnitOfMeasure(calculatedPriceUpdatedArrMenuItemJsonWithQuantityAndUnitOfMeasure);

        responseValue = true;
      }
    }
  }

  return responseValue;
};

/**
 * Keeps track, by way of an array, which ingredients have had their "quantity" property touched.
 *
 * This is similar to how Formik keeps track of which fields have been touched, which is simply having "focused" the field.
 *
 * @param {string} ingredientId
 * @param {array} arrIngredientIdsThatHaveHadQuantityTouched - this is an array of ingredient IDs and is used to keep track of which ingredients have had their "quantity" property touched.
 * @param {function} funcToUpdateArrIngredientIdsThatHaveHadQuantityTouched
 */
export const updateArrIngredientIdsThatHaveHadQuantityTouched = (ingredientId, arrIngredientIdsThatHaveHadQuantityTouched, funcToUpdateArrIngredientIdsThatHaveHadQuantityTouched) => {
  const clonedArrIngredientIdsThatHaveHadQuantityTouched = JSON.parse(JSON.stringify(arrIngredientIdsThatHaveHadQuantityTouched));
  if (!clonedArrIngredientIdsThatHaveHadQuantityTouched.includes(ingredientId)) {
    clonedArrIngredientIdsThatHaveHadQuantityTouched.push(ingredientId);
  }
  funcToUpdateArrIngredientIdsThatHaveHadQuantityTouched(clonedArrIngredientIdsThatHaveHadQuantityTouched);
};

/**
 * Checks whether or not a given ingredient has had its "quantity" field (property) touched.
 *
 * @param {string} ingredientId
 * @param {array} arrIngredientIdsThatHaveHadQuantityTouched - this is an array of ingredient IDs and is used to keep track of which ingredients have had their "quantity" property touched.
 * @returns boolean - true if the ingredient has had its "quantity" field (property) touched, false otherwise.
 */
export const isIngredientQuantityTouched = (ingredientId, arrIngredientIdsThatHaveHadQuantityTouched) => arrIngredientIdsThatHaveHadQuantityTouched.includes(ingredientId);

/**
 * Keeps track, by way of an array, which ingredients have had their "unit of measure" property touched.
 *
 * This is similar to how Formik keeps track of which fields have been touched, which is simply having "focused" the field.
 *
 * @param {string} ingredientId
 * @param {array} arrIngredientIdsThatHaveHadUnitOfMeasureTouched - this is an array of ingredient IDs and is used to keep track of which ingredients have had their "unit of measure" property touched.
 * @param {function} funcToUpdateArrIngredientIdsThatHaveHadUnitOfMeasureTouched
 */
export const updateArrIngredientIdsThatHaveHadUnitOfMeasureTouched = (ingredientId, arrIngredientIdsThatHaveHadUnitOfMeasureTouched, funcToUpdateArrIngredientIdsThatHaveHadUnitOfMeasureTouched) => {
  const clonedArrIngredientIdsThatHaveHadUnitOfMeasureTouched = JSON.parse(JSON.stringify(arrIngredientIdsThatHaveHadUnitOfMeasureTouched));
  if (!clonedArrIngredientIdsThatHaveHadUnitOfMeasureTouched.includes(ingredientId)) {
    clonedArrIngredientIdsThatHaveHadUnitOfMeasureTouched.push(ingredientId);
  }
  funcToUpdateArrIngredientIdsThatHaveHadUnitOfMeasureTouched(clonedArrIngredientIdsThatHaveHadUnitOfMeasureTouched);
};

/**
 * Checks whether or not a given ingredient has had its "unit of measure" field (property) touched.
 *
 * @param {string} ingredientId
 * @param {array} arrIngredientIdsThatHaveHadUnitOfMeasureTouched - this is an array of ingredient IDs and is used to keep track of which ingredients have had their "unit of measure" property touched.
 * @returns boolean - true if the ingredient has had its "unit of measure" field (property) touched, false otherwise.
 */
export const isIngredientUnitOfMeasureTouched = (ingredientId, arrIngredientIdsThatHaveHadUnitOfMeasureTouched) => arrIngredientIdsThatHaveHadUnitOfMeasureTouched.includes(ingredientId);

/**
 * Checks whether or not a given 'menu item row' has had its "unit of measure" field (property) touched.
 *
 * @param {string} menuItemId
 * @param {array} arrMenuItemIdsThatHaveHadUnitOfMeasureTouched - this is an array of menu item IDs and is used to keep track of which menu items have had their "unit of measure" property touched.
 * @returns boolean - true if the menu item has had its "unit of measure" field (property) touched, false otherwise.
 */
export const isMenuItemUnitOfMeasureTouched = (menuItemId, arrMenuItemIdsThatHaveHadUnitOfMeasureTouched) => arrMenuItemIdsThatHaveHadUnitOfMeasureTouched.includes(menuItemId);

/**
 * Keeps track, by way of an array, which menu items have had their "unit of measure" property touched.
 *
 * This is similar to how Formik keeps track of which fields have been touched, which is simply having "focused" the field.
 *
 * @param {string} menuItemId
 * @param {array} arrMenuItemIdsThatHaveHadUnitOfMeasureTouched - this is an array of menu item IDs and is used to keep track of which menu items have had their "unit of measure" property touched.
 * @param {function} funcToUpdateArrMenuItemIdsThatHaveHadUnitOfMeasureTouched
 */
export const updateArrMenuItemIdsThatHaveHadUnitOfMeasureTouched = (menuItemId, arrMenuItemIdsThatHaveHadUnitOfMeasureTouched, funcToUpdateArrMenuItemIdsThatHaveHadUnitOfMeasureTouched) => {
  const clonedArrMenuItemIdsThatHaveHadUnitOfMeasureTouched = JSON.parse(JSON.stringify(arrMenuItemIdsThatHaveHadUnitOfMeasureTouched));
  if (!clonedArrMenuItemIdsThatHaveHadUnitOfMeasureTouched.includes(menuItemId)) {
    clonedArrMenuItemIdsThatHaveHadUnitOfMeasureTouched.push(menuItemId);
  }
  funcToUpdateArrMenuItemIdsThatHaveHadUnitOfMeasureTouched(clonedArrMenuItemIdsThatHaveHadUnitOfMeasureTouched);
};
