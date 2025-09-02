import React, { useCallback, useEffect, useRef } from 'react';

const convertPoundToTargetUnit = (weightInPounds, targetUnit) => {
  switch (targetUnit) {
    case 'gram':
      return weightInPounds * 453.592;
    case 'kilogram':
      return weightInPounds * 0.453592;
    case 'pound':
      return weightInPounds;
    case 'ounce':
      return weightInPounds * 16;
    default:
      throw new Error('No match was found for the targetUnit parameter');
  }
};

const convertKilogramToTargetUnit = (weightInKilos, targetUnit) => {
  switch (targetUnit) {
    case 'gram':
      return weightInKilos / 1000;
    case 'kilogram':
      return weightInKilos;
    case 'pound':
      return weightInKilos * 2.20462;
    case 'ounce':
      return weightInKilos * 35.274;
    default:
      throw new Error('No match was found for the targetUnit parameter');
  }
};

const convertGramToTargetUnit = (weightInGram, targetUnit) => {
  switch (targetUnit) {
    case 'gram':
      return weightInGram;
    case 'kilogram':
      return weightInGram / 1000;
    case 'pound':
      return weightInGram * 0.00220462;
    case 'ounce':
      return weightInGram * 0.035274;
    default:
      throw new Error('No match was found for the targetUnit parameter');
  }
};

const convertOunceToTargetUnit = (weightInOunce, targetUnit) => {
  switch (targetUnit) {
    case 'gram':
      return weightInOunce * 28.3495;
    case 'kilogram':
      return weightInOunce * 0.0283495;
    case 'pound':
      return weightInOunce / 16;
    case 'ounce':
      return weightInOunce;
    default:
      throw new Error('No match was found for the targetUnit parameter');
  }
};

const convertUnitsOfWeight = (sourceUnit, sourceAmount, targetUnit) => {
  if (sourceAmount < 0) {
    throw new Error('The sourceAmount must be a positive number');
  }

  // eslint-disable-next-line eqeqeq
  if (sourceAmount == 0) {
    return 0;
  }

  let TARGET_UNIT;
  const lcTargetUnit = targetUnit.toLowerCase();
  if (lcTargetUnit.includes('kilo')) {
    TARGET_UNIT = 'kilogram';
  } else if (lcTargetUnit.includes('gram')) {
    TARGET_UNIT = 'gram';
  } else if (lcTargetUnit.includes('pound')) {
    TARGET_UNIT = 'pound';
  } else if (lcTargetUnit.includes('ounce') || lcTargetUnit.inclues('oz')) {
    TARGET_UNIT = 'ounce';
  } else {
    throw new Error('No match was found for the targetUnit parameter');
  }

  let SOURCE_UNIT;
  const lcSourceUnit = sourceUnit.toLowerCase();
  if (lcSourceUnit.includes('kilo')) {
    SOURCE_UNIT = 'kilogram';
  } else if (lcSourceUnit.includes('gram')) {
    SOURCE_UNIT = 'gram';
  } else if (lcSourceUnit.includes('pound') || lcSourceUnit.includes('lb')) {
    SOURCE_UNIT = 'pound';
  } else if (lcSourceUnit.includes('ounce') || lcSourceUnit.inclues('oz')) {
    SOURCE_UNIT = 'ounce';
  } else {
    throw new Error('No match was found for the sourceUnit parameter');
  }

  switch (SOURCE_UNIT) {
    case 'pound':
      return convertPoundToTargetUnit(sourceAmount, TARGET_UNIT);
    case 'kilogram':
      return convertKilogramToTargetUnit(sourceAmount, TARGET_UNIT);
    case 'gram':
      return convertGramToTargetUnit(sourceAmount, TARGET_UNIT);
    case 'ounce':
      return convertOunceToTargetUnit(sourceAmount, TARGET_UNIT);
    default:
      throw new Error(`No condition was matched for the source unit of ${SOURCE_UNIT}`);
  }
};

export const useConvertUnitsOfWeight = ({ sourceUnit, sourceAmount, targetUnit }) => useCallback(convertUnitsOfWeight, [sourceUnit, sourceAmount, targetUnit]);
