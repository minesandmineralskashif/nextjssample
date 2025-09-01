export const Utilities = {
  isBoolean: val => !!val === val,
  getSizeInBytesOfBase64String: (base64String, preamble) => {
    let stringLength = base64String.length;
    if (preamble.length) {
      stringLength = base64String.length - preamble.length;
    }

    const sizeInBytes = 4 * Math.ceil((stringLength / 3)) * 0.5624896334383812;
    // let sizeInKb = sizeInBytes/1024;

    return sizeInBytes;
  },
  /**
   * Sends an XMLHttpRequest to check if a URL is valid / exists.
   *
   * This is helpful to check the results of the imageResizer handler, which automatically creates resized images.
   * Due to it being an asynchronous process, we need to check if the resized images exist before we can return the
   * image object to the client.
   */
  // eslint-disable-next-line no-unused-vars
  checkIfUrlExists: url => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, true);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

    xhr.onload = function () {
      if (xhr.status === '200') {
        resolve(true);
      } else {
        resolve(false);
      }
    };
    xhr.send();
  }),
  /**
   * Sorts an array of objects based on a property of the object.
   *
   * Source: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
   *
   * To use:
   *
   * const fruits = [
   *  { name: 'grape', id: 10 },
   *  { name: 'apple', id: 9 },
   *  { name: 'watermelon', id: 8 },
   * ]
   *
   * fruits.sort(dynamicSort('name'));
   *
   * Notice that in the above example, the call to fruits.sort() is not assigned to a variable. This is because
   * the sort() method sorts the array in place.
   */
  dynamicSort: (property) => {
    let sortOrder = 1;
    let propertyLocal = property;
    if (property[0] === '-') {
      sortOrder = -1;
      propertyLocal = property.substr(1);
    }

    return function (a, b) {
      /* next line works with strings and numbers,
       * and you may want to customize it to your needs
       */
      // eslint-disable-next-line no-nested-ternary
      const result = (a[propertyLocal] < b[propertyLocal]) ? -1 : (a[propertyLocal] > b[propertyLocal]) ? 1 : 0;
      return result * sortOrder;
    };
  },

  getDateFormatBasedOnNavigatorLanguage: (localeCode) => {
    if (!localeCode) {
      throw new Error('The parameter localeCode is required.');
    }

    let desiredFormat = 'dd/MM/yyyy';

    switch (localeCode) {
      case 'en-US':
      case 'en':
        desiredFormat = 'MM/dd/yyyy';
        break;
      case 'en-GB':
        desiredFormat = 'dd/MM/yyyy';
        break;
      case 'fr-FR':
      case 'fr':
        desiredFormat = 'dd/MM/yyyy';
        break;
      case 'de-DE':
      case 'de':
        desiredFormat = 'dd.MM.yyyy';
        break;
      case 'es-ES':
      case 'es':
        desiredFormat = 'dd/MM/yyyy';
        break;
      case 'es-MX':
        desiredFormat = 'dd/MM/yyyy';
        break;
      case 'it-IT':
      case 'it':
        desiredFormat = 'dd/MM/yyyy';
        break;
      case 'nl-NL':
      case 'nl':
        desiredFormat = 'dd-MM-yyyy';
        break;
      case 'pt-PT':
      case 'pt':
        desiredFormat = 'dd/MM/yyyy';
        break;
      case 'pt-BR':
        desiredFormat = 'dd/MM/yyyy';
        break;
      case 'ru-RU':
      case 'ru':
        desiredFormat = 'dd.MM.yyyy';
        break;
      case 'zh-CN':
      case 'zh':
        desiredFormat = 'yyyy/MM/dd';
        break;
      case 'zh-TW':
        desiredFormat = 'yyyy/MM/dd';
        break;
      case 'ja-JP':
      case 'ja':
        desiredFormat = 'yyyy/MM/dd';
        break;
      case 'ko-KR':
      case 'ko':
        desiredFormat = 'yyyy/MM/dd';
        break;
      default:
        desiredFormat = 'dd/MM/yyyy';
        break;
    }

    return desiredFormat;
  },

  /**
   * Returns a new date that is X number of seconds into the future.
   * Useful when trying to determine an expiry value as an actual date
   */
  getDateXSecondsIntoTheFuture: (seconds) => {
    const addSeconds = (date, secondsToAdd) => {
      const dateCopy = new Date(date);
      dateCopy.setSeconds(dateCopy.getSeconds() + secondsToAdd);

      return dateCopy;
    };

    const now = new Date();
    const futureDate = addSeconds(now, seconds);
    return futureDate;
  },

  /**
   * Compares the current date to a date in the future.
   * Useful when trying to determine if a date has expired.
   */
  isDateInTheFuture: (dateToCompare) => {
    const now = new Date();
    const dateToCompareCopy = new Date(dateToCompare);

    return now < dateToCompareCopy;
  },

  /**
   * Returns the currency symbol based on a string denoting the currency code.
   *
   * IMPORTANT: This function is not complete list. It only contains the most likely currencies that Cocina Digital may encounter.
   */
  getCurrencySymbol: (currencyCode) => {
    let currencySymbol = '$';
    switch (currencyCode?.toUpperCase()) {
      case 'USD':
        currencySymbol = '$';
        break;
      case 'CAD':
        currencySymbol = '$';
        break;
      case 'EUR':
        currencySymbol = '€';
        break;
      case 'GBP':
        currencySymbol = '£';
        break;
      case 'AUD':
        currencySymbol = '$';
        break;
      case 'NZD':
        currencySymbol = '$';
        break;
      case 'JPY':
        currencySymbol = '¥';
        break;
      case 'CNY':
        currencySymbol = '¥';
        break;
      case 'INR':
        currencySymbol = '₹';
        break;
      case 'RUB':
        currencySymbol = '₽';
        break;
      case 'TRY':
        currencySymbol = '₺';
        break;
      case 'BRL':
        currencySymbol = 'R$';
        break;
      case 'ZAR':
        currencySymbol = 'R';
        break;
      case 'NGN':
        currencySymbol = '₦';
        break;
      case 'PHP':
        currencySymbol = '₱';
        break;
      case 'CHF':
        currencySymbol = '₣';
        break;
      case 'MXN':
        currencySymbol = '$';
        break;
      case 'SGD':
        currencySymbol = '$';
        break;
      case 'MYR':
        currencySymbol = 'RM';
        break;
      case 'IDR':
        currencySymbol = 'Rp';
        break;
      case 'NOK':
        currencySymbol = 'kr';
        break;
      case 'KRW':
        currencySymbol = '₩';
        break;
      case 'PLN':
        currencySymbol = 'zł';
        break;
      case 'ILS':
        currencySymbol = '₪';
        break;
      case 'CLP':
        currencySymbol = '$';
        break;
      case 'COP':
        currencySymbol = '$';
        break;
      case 'ARS':
        currencySymbol = '$';
        break;
      case 'CZK':
        currencySymbol = 'Kč';
        break;
      case 'EGP':
        currencySymbol = '£';
        break;
      case 'HUF':
        currencySymbol = 'Ft';
        break;
      case 'AED':
        currencySymbol = 'د.إ';
        break;
      case 'HKD':
        currencySymbol = '$';
        break;
      case 'TWD':
        currencySymbol = 'NT$';
        break;
      case 'SAR':
        currencySymbol = '﷼';
        break;
      case 'THB':
        currencySymbol = '฿';
        break;
      case 'VND':
        currencySymbol = '₫';
        break;
      case 'UAH':
        currencySymbol = '₴';
        break;
      case 'BDT':
        currencySymbol = '৳';
        break;
      case 'DOP':
        currencySymbol = 'RD$';
        break;
      case 'PEN':
        currencySymbol = 'S/.';
        break;
      case 'RON':
        currencySymbol = 'lei';
        break;
      case 'LKR':
        currencySymbol = '₨';
        break;
      case 'PKR':
        currencySymbol = '₨';
        break;
      case 'IQD':
        currencySymbol = 'ع.د';
        break;
      case 'QAR':
        currencySymbol = '﷼';
        break;
      case 'CRC':
        currencySymbol = '₡';
        break;
      case 'HRK':
        currencySymbol = 'kn';
        break;
      case 'BGN':
        currencySymbol = 'лв';
        break;
      case 'HNL':
        currencySymbol = 'L';
        break;
      case 'DZD':
        currencySymbol = 'د.ج';
        break;
      case 'MAD':
        currencySymbol = 'د.م.';
        break;
      case 'ISK':
        currencySymbol = 'kr';
        break;
      case 'BOB':
        currencySymbol = 'Bs';
        break;
      case 'PYG':
        currencySymbol = '₲';
        break;
      default:
        currencySymbol = '$';
        break;
    }
    return currencySymbol;
  },

  getAbbreviatedUnitOfMeasure: (unitOfMeasure, quantity = 1) => {
    switch (unitOfMeasure) {
      case 'cup':
      case 'cup_fluid':
      case 'cup_volume':
        if (quantity > 1) {
          return 'cups';
        }
        return 'cup';
      case 'each':
        return 'ea';
      case 'fluid ounce':
      case 'fluid_ounce':
        return 'fl oz';
      case 'gallon':
        return 'gal';
      case 'gram':
        return 'g';
      case 'kilogram':
        if (quantity > 1) {
          return 'kilograms';
        }
        return 'kg';
      case 'liter':
        return 'l';
      case 'milliliter':
        return 'ml';
      case 'ounce':
        return 'oz';
      case 'pint':
        return 'pt';
      case 'pound':
        if (quantity > 1) {
          return 'pounds';
        }
        return 'lb';
      case 'quart':
        if (quantity > 1) {
          return 'quarts';
        }
        return 'qt';
      case 'stalk':
        if (quantity > 1) {
          return 'stalks';
        }
        return 'stalk';
      case 'stick':
        if (quantity > 1) {
          return 'sticks';
        }
        return 'stick';
      case 'tablespoon':
        return 'tbsp';
      case 'teaspoon':
        return 'tsp';
      case 'total':
        return 'total';
      default:
        return '';
    }
  },

  /**
   * Takes a decimal and ensures that it rounds to the nearest hundredth.
   *
   * Example: 0.3333333333333333 becomes 0.33
   */
  roundToTwo: num => +(`${Math.round(`${num}e+2`)}e-2`),

  /**
   * Takes two Date objects and calculates the difference between them in days.
   *
   * Partial days are rounded up: 1.2 days becomes 2 days.
   *
   * To use:
   * 1. date1 should be a Date object that is in the past or current date.
   * 2. date2 should be a Date object that is in the future or current date.
   */
  getDaysBetweenTwoDates: (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    // const date1Copy = new Date(date1);
    // const date2Copy = new Date(date2);

    const timeDifference = date2.getTime() - date1.getTime();
    const daysDifference = timeDifference / oneDay;

    return Math.ceil(daysDifference);
  }
};
