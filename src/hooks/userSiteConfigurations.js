export const useFormattedDate = (
  yyyymmdd,
  preferredDateFormat = undefined,
  localeCode = undefined,
  options = {}
) => {
  if (!yyyymmdd) {
    return '';
  }

  const dateObj = new Date(yyyymmdd);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(dateObj.getTime())) {
    return '';
  }

  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  };

  const formatOptions = { ...defaultOptions, ...options };

  // if (!localeCode) {
  //   localeCode = navigator.language || 'en-US';
  // }

  if (preferredDateFormat === 'commaSeparated' && !localeCode) {
    return dateObj.toLocaleDateString('en-GB', formatOptions);
  }

  if (preferredDateFormat === 'mmddyyyy' && !localeCode) {
    return dateObj.toLocaleDateString('en-US', formatOptions);
  }

  if (!preferredDateFormat && localeCode) {
    return dateObj.toLocaleDateString(localeCode, formatOptions);
  }

  if (preferredDateFormat === 'ddmmyyyy' && localeCode) {
    // the preferredDateFormat takes precedence over the localeCode
    // since the user explicitly requested a specific format
    if (localeCode.indexOf('es') !== -1) {
      return dateObj.toLocaleDateString(localeCode, formatOptions);
    }
    return dateObj.toLocaleDateString('en-GB', formatOptions);
  }

  if (preferredDateFormat === 'mmddyyyy' && localeCode) {
    // the preferredDateFormat takes precedence over the localeCode
    // since the user explicitly requested a specific format
    if (localeCode.indexOf('es') !== -1) {
      return dateObj.toLocaleDateString(localeCode, formatOptions);
    }
    return dateObj.toLocaleDateString('en-US', formatOptions);
  }

  // default to use:
  return dateObj.toLocaleDateString('en-US', formatOptions);
};

export const useFormattedTime = (
  timeIn24HourFormat,
  localeCode = undefined,
  options = {}
) => {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(new Date(`2025-01-01T${timeIn24HourFormat}`).getTime())) {
    return '';
  }

  const defaultOptions = {
    hour: 'numeric',
    minute: '2-digit',
    second: undefined,
    timeZoneName: undefined,
  };

  const formatOptions = { ...defaultOptions, ...options };

  const defaultLocale = 'en-US';

  return new Date(`2025-01-01T${timeIn24HourFormat}`).toLocaleTimeString(localeCode ?? defaultLocale, formatOptions);
};

export const useFormattedNumber = (
  inputNumber,
  preferredDecimalSeparator = undefined,
  localeCode = undefined,
  options = {}
) => {
  if (inputNumber === undefined || inputNumber === null) {
    return '';
  }

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(inputNumber)) {
    return '';
  }

  const defaultOptions = {
    style: 'decimal',
    useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
    // minimumSignificantDigits: 1, // this will ensure that the number is always displayed with at least one digit
    // maximumSignificantDigits: 21, // this will ensure that the number is always displayed with at most 21 digits
    // minimumIntegerDigits: 1, // this will ensure that the number is always displayed with at least one digit before the decimal point
    // maximumIntegerDigits: 21, // this will ensure that the number is always displayed with at most 21 digits before the decimal point
    // minimumFractionDigits: 0, // this will ensure that the number is always displayed with at least 0 digits after the decimal point
    // maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  };

  const formatOptions = { ...defaultOptions, ...options };

  if (preferredDecimalSeparator === 'commaSeparated' && !localeCode) {
    return inputNumber.toLocaleString('pt-BR', formatOptions);
  }

  if (preferredDecimalSeparator === 'periodSeparated' && !localeCode) {
    return inputNumber.toLocaleString('en-US', formatOptions);
  }

  if (!preferredDecimalSeparator && localeCode) {
    return inputNumber.toLocaleString(localeCode, formatOptions);
  }

  if (preferredDecimalSeparator === 'commaSeparated' && localeCode) {
    // the preferredDecimalSeparator takes precedence over the localeCode
    // since the user explicitly requested a specific format
    // if (localeCode.indexOf('es') !== -1) {
    //   return inputNumber.toLocaleString(localeCode, formatOptions);
    // }
    return inputNumber.toLocaleString('pt-BR', formatOptions);
  }

  if (preferredDecimalSeparator === 'periodSeparated' && localeCode) {
    // the preferredDecimalSeparator takes precedence over the localeCode
    // since the user explicitly requested a specific format
    // if (localeCode.indexOf('es') !== -1) {
    //   return inputNumber.toLocaleString(localeCode, formatOptions);
    // }
    return inputNumber.toLocaleString('en-US', formatOptions);
  }

  // if (preferredDecimalSeparator && !localeCode) {
  // localeCode = navigator.language || 'en-US';
  return inputNumber.toLocaleString(navigator.language || 'en-US', formatOptions);
  // }

  // return new Intl.NumberFormat(localeCode, formatOptions).format(inputNumber);
};

export const useFormattedPercentage = (valueInDecimalFormat, locale = 'en-US', options = {}) => {
  // Assuming 'valueInDecimalFormat' is a decimal (e.g., 0.75 for 75%)
  const additionalOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options, // Allows for custom options like minimumFractionDigits
  };
  const formatter = new Intl.NumberFormat(locale, {
    style: 'percent',
    ...additionalOptions, // Allows for custom options like minimumFractionDigits
  });
  return formatter.format(valueInDecimalFormat);

  // // Example usage:
  // console.log(formatPercentageIntl(0.75));
  // // Output (may vary by locale): 75%

  // console.log(formatPercentageIntl(0.12345, 'en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  // // Output: 12.35%

  // console.log(formatPercentageIntl(0.5, 'fr-FR'));
  // // Output (may vary by locale): 50 %
};

// Forces the use of whole numbers by turning off decimal places
export const wholeNumberFormatOptions = {
  style: 'decimal',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0, // this will ensure that the number is always displayed with at least 0 digits after the decimal point
  maximumFractionDigits: 0, // this will ensure that the number is always displayed with at most 0 digits
};

// Default currency: US Dollar
export const currencyFormatOptionsDefault = {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Argentina
export const currencyFormatOptionsArs = {
  style: 'currency',
  currency: 'ARS',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Australian Dollar
export const currencyFormatOptionsAud = {
  style: 'currency',
  currency: 'AUD',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Belize
export const currencyFormatOptionsBzd = {
  style: 'currency',
  currency: 'BZD',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Bolivian Boliviano
export const currencyFormatOptionsBov = {
  style: 'currency',
  currency: 'BOB',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Brazilian Real
export const currencyFormatOptionsBrl = {
  style: 'currency',
  currency: 'BRL',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Canadian Dollar
export const currencyFormatOptionsCad = {
  style: 'currency',
  currency: 'CAD',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Chilean Peso
export const currencyFormatOptionsClp = {
  style: 'currency',
  currency: 'CLP',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Colombia
export const currencyFormatOptionsCop = {
  style: 'currency',
  currency: 'COP',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Costa Rica
export const currencyFormatOptionsCrc = {
  style: 'currency',
  currency: 'CRC',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Cuba
export const currencyFormatOptionsCup = {
  style: 'currency',
  currency: 'CUP',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Dominican Republic
export const currencyFormatOptionsDop = {
  style: 'currency',
  currency: 'DOP',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Ecuador - note: Ecuador uses the US Dollar (USD) as its official currency, but it is included here for completeness.
export const currencyFormatOptionsEcuador = {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// El Salvador
export const currencyFormatOptionsSVC = {
  style: 'currency',
  currency: 'SVC',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Euro
export const currencyFormatOptionsEuro = {
  style: 'currency',
  currency: 'EUR',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Guatemala
export const currencyFormatOptionsGtn = {
  style: 'currency',
  currency: 'GTQ',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Guyana
export const currencyFormatOptionsGyd = {
  style: 'currency',
  currency: 'GYD',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Honduras
export const currencyFormatOptionsHnl = {
  style: 'currency',
  currency: 'HNL',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// India
export const currencyFormatOptionsInr = {
  style: 'currency',
  currency: 'INR',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Jamaica
export const currencyFormatOptionsJmd = {
  style: 'currency',
  currency: 'JMD',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Kenya
export const currencyFormatOptionsKes = {
  style: 'currency',
  currency: 'KES',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Mexico
export const currencyFormatOptionsMxn = {
  style: 'currency',
  currency: 'MXN',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Nicaragua
export const currencyFormatOptionsNio = {
  style: 'currency',
  currency: 'NIO',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Pakistan
export const currencyFormatOptionsPkr = {
  style: 'currency',
  currency: 'PKR',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Panama
export const currencyFormatOptionsPab = {
  style: 'currency',
  currency: 'PAB',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Paraguay
export const currencyFormatOptionsPyg = {
  style: 'currency',
  currency: 'PYG',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Peru
export const currencyFormatOptionsPen = {
  style: 'currency',
  currency: 'PEN',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Suriname
export const currencyFormatOptionsSrd = {
  style: 'currency',
  currency: 'SRD',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Switzerland
export const currencyFormatOptionsChf = {
  style: 'currency',
  currency: 'CHF',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// United Kingdom
export const currencyFormatOptionsGbp = {
  style: 'currency',
  currency: 'GBP',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// United States
export const currencyFormatOptionsUsd = {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Uruguay
export const currencyFormatOptionsUru = {
  style: 'currency',
  currency: 'UYU',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

// Venezuela
export const currencyFormatOptionsVenezuela = {
  style: 'currency',
  currency: 'VES',
  currencyDisplay: 'symbol',
  useGrouping: true, // when set to true, it will format numbers with commas (or periods) as thousands separator
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};
