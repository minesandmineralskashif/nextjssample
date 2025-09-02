'use client';

import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';
import { getLocalStorage, setLocalStorage } from '../../lib/storageHelper';
import { useMounted } from '../../hooks/use-mounted';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(null);
  const mounted = useMounted();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);
    setCookieConsent(storedCookieConsent);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const newValue = cookieConsent ? 'granted' : 'denied';

    // window.gtag('consent', 'update', {
    //   analytics_storage: newValue
    // });

    setLocalStorage('cookie_consent', cookieConsent);
  }, [cookieConsent, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <Box
      sx={{
        zIndex: 1200,
        position: 'sticky',
        bottom: '30px',
        marginLeft: '10px',
        marginRight: '10px',
        padding: '1.5rem',
        backgroundColor: {
          xs: '#FFFFFF',
          sm: 'primary.main',
        },
        display: cookieConsent === null ? 'flex' : 'none',
        flexDirection: 'column',
        color: {
          xs: '#000000',
          sm: '#FFFFFF',
        },
        boxShadow: '5px 10px 8px 10px #888888'
      }}
    >
      <Box>
        <Typography
          component="div"
          variant="h3"
          sx={{
            fontSize: '1.25rem',
            fontWeight: 600,
          }}
        >
          {t('We use cookies on our site')}
        </Typography>
        <Typography variant="body1">{t('We use cookies to enable you to use our site, understand how you use our site, and improve your overall experience.')}</Typography>

        <Typography variant="body1">{t('Cookies allow us to personalize content, track which pages are most popular and least popular, and provide advertising that may be relevant to you.')}</Typography>
        {/* <Typography variant="body1">{t('You can learn more about our cookies and manage your preferences using this tool.')}</Typography> */}
        <Typography variant="body1">{t('Please note that cookies that are essential to the proper functioning of the site are required and cannot be disabled.')}</Typography>

        <Typography variant="body1">{t('They are usually only set in response to actions made by you which amount to remembering your settings, a request for services, such as setting your privacy preferences, logging in, or filling in forms.')}</Typography>
        <Typography variant="body1">{t('As such, they are the only cookies that are enabled by default.')}</Typography>
        <Typography variant="body1">{t('You can set your browser to block or alert you about these cookies.')}</Typography>
        <Typography variant="body1">{t('By continuing to use our site, you accept our use of cookies.')}</Typography>

      </Box>
      <Box
        sx={{
          marginTop: '15px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: {
            xs: 'column',
            md: 'row',
          }

        }}
      >
        <Button
          variant="outlined"
          onClick={() => setCookieConsent(true)}
          sx={{
            backgroundColor: '#FFF',
            color: 'text.primary',
            minWidth: '150px',
            '&:hover': {
              backgroundColor: 'secondary.main',
              color: '#FFF',
            },
            marginBottom: {
              xs: '10px',
              md: 0,
            },
            marginRight: {
              xs: 0,
              md: '10px',
            }
          }}
        >
          <strong>{t('Allow Cookies')}</strong>
        </Button>
        <Button
          variant="outlined"
          onClick={() => setCookieConsent(false)}
          sx={{
            backgroundColor: '#FFF',
            color: 'text.primary',
            minWidth: '150px',
            '&:hover': {
              backgroundColor: '#FFF',
              color: 'dodgerblue',
            }
          }}
        >
          <strong>{t('Decline')}</strong>
        </Button>

      </Box>
    </Box>
  );
}
