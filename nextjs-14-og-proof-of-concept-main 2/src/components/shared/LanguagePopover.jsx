import {
  Box, ListItemIcon, ListItemText, MenuItem, Popover, Typography
} from '@mui/material';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { getUserLocale } from 'get-user-locale';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export function LanguagePopover(props) {
  const {
    anchorEl, onClose, open, ...other
  } = props;
  const { i18n, t } = useTranslation();

  const languageOptions = {
    en: {
      image: '/static/icons/united-states-flag-icon.svg',
      label: t('English'),
      alt: 'United States flag icon',
      width: 27,
      height: 20,
    },
    es: {
      image: '/static/icons/mexico-flag-icon.svg',
      label: t('Spanish'),
      alt: 'Mexico flag icon',
      width: 27,
      height: 20,
    },
  };

  const handleChange = async (language) => {
    onClose?.();
    await i18n.changeLanguage(language);
    setCookie(process.env.NEXT_PUBLIC_LANGUAGE_COOKIE_NAME, language, {
      secure: true,
      path: '/'
    });
    toast.success(t('Language changed'));
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'bottom'
      }}
      keepMounted
      onClose={onClose}
      open={!!open}
      PaperProps={{ sx: { width: 240 } }}
      transitionDuration={0}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {Object.keys(languageOptions).map(language => (
        <MenuItem
          onClick={() => handleChange(language)}
          key={language}
        >
          <ListItemIcon>
            <Box
              sx={{
                display: 'flex',
                height: 20,
                width: 20,

              }}
            >
              <img
                alt={languageOptions[language].label}
                src={languageOptions[language].image}
                width={languageOptions[i18n.language]?.width}
                height={languageOptions[i18n.language]?.height}
              />
            </Box>
          </ListItemIcon>
          <ListItemText
            primary={(
              <Typography variant="subtitle2">
                {languageOptions[language].label}
              </Typography>
            )}
          />
        </MenuItem>
      ))}
    </Popover>
  );
}

LanguagePopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

LanguagePopover.defaultProps = {
  anchorEl: null,
  onClose: () => { },
  open: false,
};
