import PropTypes from 'prop-types';
import React from 'react';
import { Utilities } from '../../utils/utilities';

function FractionFromDecimal(props) {
  const {
    decimalValue,
  } = props;
  const decimalWithTwoDecimalPlaces = Utilities.roundToTwo(decimalValue);
  // 1/2
  if (decimalWithTwoDecimalPlaces === 0.5 || decimalValue === 0.5) {
    return (
      <>
        <sup>1</sup>
        &frasl;
        <sub>2</sub>
      </>
    );
  }
  // 1/3
  if (decimalWithTwoDecimalPlaces === 0.33 || decimalValue === 0.3333333333333333 || decimalValue === 0.33) {
    return (
      <>
        <sup>1</sup>
        &frasl;
        <sub>3</sub>
      </>
    );
  }
  // 2/3
  if (decimalWithTwoDecimalPlaces === 0.67 || decimalValue === 0.6666666666666666 || decimalValue === 0.66) {
    return (
      <>
        <sup>2</sup>
        &frasl;
        <sub>3</sub>
      </>
    );
  }
  // 1/4
  if (decimalWithTwoDecimalPlaces === 0.25 || decimalValue === 0.25) {
    return (
      <>
        <sup>1</sup>
        &frasl;
        <sub>4</sub>
      </>
    );
  }
  // 3/4
  if (decimalWithTwoDecimalPlaces === 0.75 || decimalValue === 0.75) {
    return (
      <>
        <sup>3</sup>
        &frasl;
        <sub>4</sub>
      </>
    );
  }

  // 1/8
  if (decimalWithTwoDecimalPlaces === 0.13 || decimalValue === 0.125 || decimalValue === 0.13) {
    return (
      <>
        <sup>1</sup>
        &frasl;
        <sub>8</sub>
      </>
    );
  }
  // 5/8
  if (decimalWithTwoDecimalPlaces === 0.63 || decimalValue === 0.625) {
    return (
      <>
        <sup>5</sup>
        &frasl;
        <sub>8</sub>
      </>
    );
  }
  // 7/8
  if (decimalWithTwoDecimalPlaces === 0.88 || decimalValue === 0.875 || decimalValue === 0.88) {
    return (
      <>
        <sup>7</sup>
        &frasl;
        <sub>8</sub>
      </>
    );
  }
  // 1/6
  if (decimalWithTwoDecimalPlaces === 0.17 || decimalValue === 0.16666666666666666 || decimalValue === 0.16 || decimalValue === 0.17) {
    return (
      <>
        <sup>1</sup>
        &frasl;
        <sub>6</sub>
      </>
    );
  }
  // 5/6
  if (decimalWithTwoDecimalPlaces === 0.83 || decimalValue === 0.8333333333333334 || decimalValue === 0.83) {
    return (
      <>
        <sup>5</sup>
        &frasl;
        <sub>6</sub>
      </>
    );
  }

  // If the decimal value is not one of the above, return the decimal value
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {decimalValue}
    </>
  );
}

export default FractionFromDecimal;

FractionFromDecimal.propTypes = {
  decimalValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
};
