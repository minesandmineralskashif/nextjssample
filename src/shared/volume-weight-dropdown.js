import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  ListSubheader,
  MenuItem,
  Select,
  Typography
} from '@mui/material';

export function VolumeWeightDropdown(props) {
  const {
    fieldName,
    fieldLabel,
    // handleUnitOfMeasure
    formikObj
  } = props;

  const { t } = useTranslation();

  return (
    <>
      <Select
        value={formikObj.values[fieldName] || ''}
        name={fieldName || 'unit-of-measure'}
        label={fieldLabel || t('Unit of Measure')}
        onChange={evt => formikObj.setFieldValue(fieldName || 'unit-of-measure', evt.target.value)}
        onBlur={formikObj.handleBlur}
        error={Boolean(formikObj.touched[fieldName] && formikObj.errors[fieldName])}
        // helperText={formikObj.touched[fieldName] && formikObj.errors[fieldName]}
      >
        <ListSubheader>{t('Volume')}</ListSubheader>
        <MenuItem key="teaspoon" value="teaspoon">{t('teaspoon')}</MenuItem>
        <MenuItem key="tablespoon" value="tablespoon">{t('tablespoon')}</MenuItem>
        <MenuItem key="cup_volume" value="cup">{t('cup')}</MenuItem>
        <MenuItem key="milliliter" value="milliliter">{t('milliliter (mL)')}</MenuItem>
        <MenuItem key="fluid_ounce" value="fluid_ounce">{t('fluid ounce')}</MenuItem>
        <MenuItem key="pint" value="pint">{t('pint')}</MenuItem>
        <MenuItem key="quart" value="quart">{t('quart')}</MenuItem>
        <MenuItem key="liter" value="liter">{t('liter')}</MenuItem>
        <MenuItem key="gallon" value="gallon">{t('gallon')}</MenuItem>

        <ListSubheader>{t('Weight')}</ListSubheader>
        <MenuItem key="pound" value="pound">{t('pound')}</MenuItem>
        <MenuItem key="kilogram" value="kilogram">{t('kilogram')}</MenuItem>
        <MenuItem key="ounce" value="ounce">{t('ounce')}</MenuItem>
        <MenuItem key="gram" value="gram">{t('gram')}</MenuItem>

        <ListSubheader>{t('Count')}</ListSubheader>
        <MenuItem key="total" value="total">{t('total')}</MenuItem>
        <MenuItem key="stalk" value="stalk">{t('stalk(s)')}</MenuItem>
        <MenuItem key="stick" value="stick">{t('stick(s)')}</MenuItem>

      </Select>
      {formikObj.touched[fieldName] && formikObj.errors[fieldName] && (
        <Typography
          className="error"
          sx={{
            color: '#D14343',
            fontSize: '0.75rem',
            fontWeight: '400',
            lineHeight: '1.66',
            textAlign: 'left',
            marginTop: '3px',
            marginBottom: '0px',
            marginLeft: '14px',
          }}
        >
          {formikObj.errors[fieldName]}
        </Typography>
      )}
    </>
  );
}

VolumeWeightDropdown.propTypes = {
  fieldName: PropTypes.string,
  fieldLabel: PropTypes.string,
  // handleUnitOfMeasure: PropTypes.func,
  formikObj: PropTypes.object.isRequired,
};

VolumeWeightDropdown.defaultProps = {
  fieldName: 'unit-of-measure',
  fieldLabel: 'Unit of Measure',
  // handleUnitOfMeasure: () => {},
};
