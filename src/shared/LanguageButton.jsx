import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  ButtonBase,
  IconButton,
  Toolbar,
  Tooltip
} from '@mui/material';
import React, {
  useContext, useEffect, useRef, useState
} from 'react';
import { useTranslation } from 'react-i18next';

import { LanguagePopover } from './LanguagePopover';

const languages = {
  en: {
    image: '/static/icons/united-states-flag-icon.svg',
    alt: 'United States flag icon',
    width: 27,
    height: 20,
  },
  es: {
    image: '/static/icons/mexico-flag-icon.svg',
    alt: 'Mexico flag icon',
    width: 27,
    height: 20,
  },
};

export function LanguageButton() {
  const anchorRef = useRef(null);
  const { i18n } = useTranslation();
  const [openPopover, setOpenPopover] = useState(false);

  const handleOpenPopover = () => {
    setOpenPopover(true);
  };

  const handleClosePopover = () => {
    setOpenPopover(false);
  };

  return (
    <>
      <IconButton
        onClick={handleOpenPopover}
        ref={anchorRef}
        sx={{ ml: 1 }}
      >
        <Box
          sx={{
            display: 'flex',
            height: 20,
            width: 20,

          }}
        >
          <img
            src={languages[i18n.language]?.image}
            width={languages[i18n.language]?.width}
            height={languages[i18n.language]?.height}
            alt={languages[i18n.language]?.alt}
          />
        </Box>
      </IconButton>
      <LanguagePopover
        anchorEl={anchorRef.current}
        onClose={handleClosePopover}
        open={openPopover}
      />
    </>
  );
}
