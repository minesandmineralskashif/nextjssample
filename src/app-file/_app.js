/* eslint-disable react/prop-types */
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import nProgress from "nprogress";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Provider as ReduxProvider } from "react-redux";
import dynamic from "next/dynamic";

import axios from "axios";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import {
  de,
  enGB,
  enUS,
  es,
  fr,
  it,
  ja,
  ko,
  pt,
  ptBR,
  zhCN,
  zhTW,
} from "date-fns/locale";
import { getUserLocale } from "get-user-locale";
import TagManager from "react-gtm-module";
import { useTranslation } from "react-i18next";
import { RTL } from "../components/rtl";

import { SplashScreen } from "../components/splash-screen";
import { AuthConsumer, AuthProvider } from "../contexts/jwt-context";
import {
  SettingsConsumer,
  SettingsProvider,
} from "../contexts/settings-context";

import { createEmotionCache } from "../../utils/create-emotion-cache";
import CookieBanner from "../components/shared/CookieBanner";
import { useAuth } from "../hooks/use-auth";
import { useMounted } from "../hooks/use-mounted";
import "../i18n";
import { gtm } from "../lib/gtm";
import { store } from "../store";
import { createTheme } from "../theme";
import { refreshIdTokenAsNeeded } from "../utils/aws-cognito-custom";

// Dynamically import components that use browser APIs
const DynamicCookieBanner = dynamic(
  () => import("../components/shared/CookieBanner"),
  {
    ssr: false,
  }
);

const DynamicSettingsButton = dynamic(
  () => import("../components/settings-button").then(mod => ({ default: mod.SettingsButton })),
  {
    ssr: false,
  }
);

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const clientSideEmotionCache = createEmotionCache();

const Auth = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // if `{required: true}` is supplied, `status` can only be "loading" or "authenticated"
};

const locales = {
  "en-us": enUS,
  "en-gb": enGB,
  "es-mx": es,
  "es-es": es,
  "fr-fr": fr,
  "pt-br": ptBR,
  "pt-pt": pt,
  "de-de": de,
  "it-it": it,
  "ja-jp": ja,
  "ko-kr": ko,
  "zh-cn": zhCN,
  "zh-tw": zhTW,
};

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_CONTAINER_ID,
};

function App(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  const { t, i18n } = useTranslation();

  const { query, router } = useRouter();
  const { logout } = useAuth();

  const [locale, setLocale] = useState("en-us");
  const mounted = useMounted();
  
  // Server-side detection for OG Protocol fix
  const isServer = typeof window === 'undefined';
  
  // Add a state to track hydration completion
  const [hasHydrated, setHasHydrated] = useState(false);
  
  useEffect(() => {
    // Mark as hydrated on client side
    setHasHydrated(true);
  }, []);
  


  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="google" content="notranslate" />
      </Head>
      <PayPalScriptProvider
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          intent: "subscription",
          components: "buttons",
          vault: true,
        }}
      >
        <ReduxProvider store={store}>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={locales[locale]}
          >
            <AuthProvider>
              <SettingsProvider>
                <SettingsConsumer>
                  {({ settings }) => (
                    <ThemeProvider
                      theme={createTheme({
                        direction: settings.direction,
                        responsiveFontSizes: settings.responsiveFontSizes,
                        mode: settings.theme,
                      })}
                    >
                      <RTL direction={settings.direction}>
                        <CssBaseline />
                        {hasHydrated && <Toaster position="top-center" />}
                        {hasHydrated && <DynamicSettingsButton />}
                        <div suppressHydrationWarning>
                          {isServer || !hasHydrated ? (
                            // Server and initial client render: always show page content
                            getLayout(<Component {...pageProps} />)
                          ) : (
                            // After hydration: use auth logic
                            <AuthConsumer>
                              {(auth) =>
                                !auth.isInitialized || !mounted ? (
                                  <SplashScreen />
                                ) : (
                                  getLayout(<Component {...pageProps} />)
                                )
                              }
                            </AuthConsumer>
                          )}
                        </div>
                        <DynamicCookieBanner />
                      </RTL>
                    </ThemeProvider>
                  )}
                </SettingsConsumer>
              </SettingsProvider>
            </AuthProvider>
          </LocalizationProvider>
        </ReduxProvider>
      </PayPalScriptProvider>
    </CacheProvider>
  );
}

export default App;
