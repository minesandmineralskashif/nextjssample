import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const initialSettings = {
  direction: 'ltr',
  responsiveFontSizes: true,
  theme: 'light'
};

export const restoreSettings = () => {
  let settings = null;

  try {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      const storedData = globalThis.localStorage.getItem('settings');

      if (storedData) {
        settings = JSON.parse(storedData);
      } else {
        settings = {
          direction: 'ltr',
          responsiveFontSizes: true,
          theme: globalThis.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
        };
      }
    }
  } catch (err) {
    console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return settings;
};

export const storeSettings = (settings) => {
  if (typeof window !== 'undefined') {
    globalThis.localStorage.setItem('settings', JSON.stringify(settings));
  }
};

export const SettingsContext = createContext({
  settings: initialSettings,
  saveSettings: () => { }
});

export function SettingsProvider(props) {
  const { children } = props;
  const [settings, setSettings] = useState(initialSettings);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    // Mark as hydrated and restore settings
    setHasHydrated(true);
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setSettings(restoredSettings);
    }
  }, []);

  const saveSettings = (updatedSettings) => {
    setSettings(updatedSettings);
    storeSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings: hasHydrated ? settings : initialSettings,
        saveSettings
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const SettingsConsumer = SettingsContext.Consumer;
