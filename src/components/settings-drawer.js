import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Drawer,
  FormControlLabel,
  IconButton,
  Typography
} from '@mui/material';
import { Close as XIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useSettings } from '../hooks/use-settings';
// Use base64 encoded SVGs to avoid hydration issues
const LightThemeIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjEzMCIgdmlld0JveD0iMCAwIDE1MiAxMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+';
const DarkThemeIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjEzMCIgdmlld0JveD0iMCAwIDE1MiAxMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+';

const themes = [
  {
    label: 'Light',
    value: 'light',
    icon: LightThemeIcon
  },
  {
    label: 'Dark',
    value: 'dark',
    icon: DarkThemeIcon
  }
];

const getValues = settings => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  theme: settings.theme
});

export function SettingsDrawer(props) {
  const { open = false, onClose = () => {}, ...other } = props;
  const { settings, saveSettings } = useSettings();
  const [values, setValues] = useState(getValues(settings));

  useEffect(() => {
    setValues(getValues(settings));
  }, [settings]);

  const handleChange = (field, value) => {
    setValues({
      ...values,
      [field]: value
    });
  };

  const handleSave = () => {
    saveSettings(values);
    onClose?.();
  };

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={open}
      ModalProps={{ sx: { zIndex: 2000 } }}
      PaperProps={{ sx: { width: 320 } }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          display: 'flex',
          justifyContent: 'space-between',
          px: 3,
          py: 2
        }}
      >
        <Typography
          color="inherit"
          variant="h6"
        >
          Theme settings
        </Typography>
        <IconButton
          color="inherit"
          onClick={onClose}
        >
          <XIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box
        sx={{
          py: 4,
          px: 3
        }}
      >
        <Typography
          color="textSecondary"
          sx={{
            display: 'block',
            mb: 1
          }}
          variant="overline"
        >
          Color Scheme
        </Typography>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            m: -1
          }}
        >
          {themes.map((theme) => {
            const { label, icon, value } = theme;

            return (
              <div key={value}>
                <Box
                  onClick={() => handleChange('theme', value)}
                  sx={{
                    borderColor: values.theme === value ? 'primary.main' : 'divider',
                    borderRadius: 1,
                    borderStyle: 'solid',
                    borderWidth: 2,
                    cursor: 'pointer',
                    flexGrow: 1,
                    fontSize: 0,
                    m: 1,
                    overflow: 'hidden',
                    p: 1,
                    '& img': {
                      height: 'auto',
                      width: '100%'
                    }
                  }}
                >
                  <img src={icon} alt={`${label} theme`} />
                </Box>
                <Typography
                  align="center"
                  sx={{ mt: 1 }}
                  variant="subtitle2"
                >
                  {label}
                </Typography>
              </div>
            );
          })}
        </Box>
        <Typography
          color="textSecondary"
          sx={{
            display: 'block',
            mb: 1,
            mt: 4
          }}
          variant="overline"
        >
          Settings
        </Typography>
        <div>
          <FormControlLabel
            control={(
              <Checkbox
                checked={values.direction === 'rtl'}
                name="direction"
                onChange={event => handleChange('direction', event.target.checked
                  ? 'rtl'
                  : 'ltr')}
              />
            )}
            label={(
              <Typography variant="subtitle2">
                Activate RTL content
              </Typography>
            )}
          />
        </div>
        <div>
          <FormControlLabel
            control={(
              <Checkbox
                checked={values.responsiveFontSizes}
                name="direction"
                onChange={event => handleChange('responsiveFontSizes', event.target.checked)}
              />
            )}
            label={(
              <Typography variant="subtitle2">
                Responsive font sizes
              </Typography>
            )}
          />
        </div>
        <Button
          color="primary"
          fullWidth
          onClick={handleSave}
          sx={{ mt: 3 }}
          variant="contained"
        >
          Save Settings
        </Button>
      </Box>
    </Drawer>
  );
}

SettingsDrawer.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
