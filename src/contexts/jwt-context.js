/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import PropTypes from 'prop-types';
import React, { createContext, useEffect, useReducer } from 'react';
import { authApi } from '../__fake-api__/auth-api';

import { Utilities } from '../utils/utilities';

let ActionType;
(function (ActionType) {
  ActionType.INITIALIZE = 'INITIALIZE';
  ActionType.CONFIRM_SIGNUP = 'CONFIRM_SIGNUP';
  ActionType.LOGIN = 'LOGIN';
  ActionType.LOGOUT = 'LOGOUT';
  ActionType.REGISTER = 'REGISTER';
}(ActionType || (ActionType = {})));

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  },
  CONFIRM_SIGNUP: (state, action) =>
    // const { user } = action.payload;
    ({
      ...state,
      isAuthenticated: false,
      user: null
    }),
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  LOGOUT: state => ({
    ...state,
    isAuthenticated: false,
    user: null
  }),
  REGISTER: (state, action) =>
  // const { user } = action.payload;

    ({
      ...state,
      isAuthenticated: false,
      user: null
    })

};

const reducer = (state, action) => (handlers[action.type]
  ? handlers[action.type](state, action)
  : state);

export const AuthContext = createContext({
  ...initialState,
  platform: 'JWT',
  confirmSignup: () => Promise.resolve(),
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve()
});

export function AuthProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        if (getCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN)) {
          const user = await authApi.me(getCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN));

          // @ts-ignore
          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: true,
              user
            }
          });
        } else {
          // @ts-ignore
          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null
            }
          });
        }
      } catch (err) {
        console.error(err);
        // @ts-ignore
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    };

    initialize();
  }, []);

  const confirmSignup = async (email, code, password, confirmPassword) => {
    let response;
    try {
      response = await axios.post(
        process.env.NEXT_PUBLIC_AUTHENTICATION_CONFIRM_SIGN_UP_ENDPOINT,
        {
          username: email,
          confirmationCode: code,
          password,
          confirmPassword
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Cocina-Digital-Language': getCookie(process.env.NEXT_PUBLIC_LANGUAGE_COOKIE_NAME) || 'en'
          }
        }
      );

      // await axios.post(
      //   process.env.NEXT_PUBLIC_AUTHENTICATION_CONFIRM_FORGOT_PASSWORD_ENDPOINT,
      //   {
      //     username: email,
      //     newPassword: password,
      //     confirmationCode: code
      //   },
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Cocina-Digital-Language': getCookie(process.env.NEXT_PUBLIC_LANGUAGE_COOKIE_NAME) || 'en'
      //     }
      //   }

      if (!response.data.idToken) {
        return;
      }

      const user = await authApi.me(response.data.idToken);
      if (typeof window !== 'undefined') {
        localStorage.setItem('userSiteConfigurations', JSON.stringify(response?.data?.userSiteConfigurations));
        // persist user profile data to session storage:
        sessionStorage.setItem('userProfile', JSON.stringify(response?.data?.userProfile));
        if (response?.data?.userProfile?.activeProfileImage !== undefined && response?.data?.userProfile?.activeProfileImage?.images?.length >= 2) {
          // Note: userProfile.activeProfileImage.images[1] is the 100x100 image:
          // save userProfilePicture to sessionStorage:
          globalThis.sessionStorage.setItem('userProfilePicture', response?.data?.userProfile?.activeProfileImage?.images[1]?.src);
        }
        // persist the user's organization data to session storage:
        sessionStorage.setItem('organizations', JSON.stringify(response?.data?.organizations));
      }

      // NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN
      // 1 minute = 1*60*1000 = 60000 milliseconds.
      // 29 minutes = 29*60*1000 = 1740000 milliseconds.
      // 30 minutes = 30*60*1000 = 1800000 milliseconds.
      const expires = new Date(Date.now() + (process.env.NEXT_PUBLIC_SESSION_TIMEOUT_IN_MINUTES * 60 * 1000));
      setCookie(
        process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN,
        response.data.idToken,
        {
          secure: true,
          path: '/',
          expires,
        }
      );

      // NEXT_PUBLIC_AUTHENTICATION_ACCESS_TOKEN
      setCookie(
        process.env.NEXT_PUBLIC_AUTHENTICATION_ACCESS_TOKEN,
        response.data.accessToken,
        {
          secure: true,
          path: '/'
        }
      );

      // NEXT_PUBLIC_AUTHENTICATION_REFRESH_TOKEN
      setCookie(
        process.env.NEXT_PUBLIC_AUTHENTICATION_REFRESH_TOKEN,
        response.data.refreshToken,
        {
          secure: true,
          path: '/'
        }
      );

      // NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN_EXPIRY
      setCookie(
        process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN_EXPIRY,
        Utilities.getDateXSecondsIntoTheFuture(response.data.expiryInSeconds),
        {
          secure: true,
          path: '/'
        }
      );

      // NEXT_PUBLIC_AUTHENTICATION_USER_ID
      setCookie(
        process.env.NEXT_PUBLIC_AUTHENTICATION_USER_ID,
        response.data.userId,
        {
          secure: true,
          path: '/'
        }
      );

      // NEXT_PUBLIC_AUTHENTICATION_USERNAME
      setCookie(
        process.env.NEXT_PUBLIC_AUTHENTICATION_USERNAME,
        response.data.username,
        {
          secure: true,
          path: '/'
        }
      );

      const currentDateTime = new Date();
      if (response?.data?.subscriptions?.length) {
        let hasActiveSubscription = false;
        if (response?.data?.subscriptions?.length) {
          const arrSubscriptions = response?.data?.subscriptions;
          for (const subscription of arrSubscriptions) {
            let isActiveSubscription = false;
            if ((subscription?.planStatus === 'CANCELLED' || subscription?.planStatus === 'CANCELED') && subscription?.isActive === true && subscription.endOfBillingPeriod !== undefined) {
              const endOfBillingPeriod = new Date(subscription?.endOfBillingPeriod);
              if (currentDateTime <= endOfBillingPeriod) {
                isActiveSubscription = true;

                setCookie(
                  process.env.NEXT_PUBLIC_SUBSCRIPTION_EXPIRATION_BILLING_DATE_COOKIE_NAME,
                  subscription?.endOfBillingPeriod,
                  {
                    secure: true,
                    path: '/'
                  }
                );
              }
            }

            if ((subscription?.planStatus === 'ACTIVE' && subscription?.isActive === true) || isActiveSubscription) {
              setCookie(
                process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_ID_COOKIE_NAME,
                subscription?.planId,
                {
                  secure: true,
                  path: '/'
                }
              );
              setCookie(
                process.env.NEXT_PUBLIC_SUBSCRIPTION_ID_COOKIE_NAME,
                subscription?.subscriptionId,
                {
                  secure: true,
                  path: '/'
                }
              );
              setCookie(
                process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_NAME_COOKIE_NAME,
                subscription?.planTierName?.toUpperCase(),
                {
                  secure: true,
                  path: '/'
                }
              );
              hasActiveSubscription = true;
              break;
            }
          }
        }
        if (!hasActiveSubscription) {
          // user has no active subscriptions, so we default him to the 'free tier' plan. Let's set that cookie:
          setCookie(
            process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_ID_COOKIE_NAME,
            process.env.NEXT_PUBLIC_FREE_SUBSCRIPTION_PLAN_NAME,
            {
              secure: true,
              path: '/'
            }
          );
          setCookie(
            process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_NAME_COOKIE_NAME,
            process.env.NEXT_PUBLIC_FREE_SUBSCRIPTION_PLAN_NAME,
            {
              secure: true,
              path: '/'
            }
          );
        }
      } else {
        // user has no subscriptions, so we default him to the 'free tier' plan. Let's set that cookie:
        setCookie(
          process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_ID_COOKIE_NAME,
          process.env.NEXT_PUBLIC_FREE_SUBSCRIPTION_PLAN_NAME,
          {
            secure: true,
            path: '/'
          }
        );
        setCookie(
          process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_NAME_COOKIE_NAME,
          process.env.NEXT_PUBLIC_FREE_SUBSCRIPTION_PLAN_NAME,
          {
            secure: true,
            path: '/'
          }
        );
      }

      if (response.data.roles?.list?.length) {
        let arrRoles = response.data.roles?.list;
        arrRoles = arrRoles.map(role => role.trim().toUpperCase());

        // handle BETA_TESTER:
        if (response.data.roles?.list?.includes('BETA_TESTER')) {
          if (!response.data.subscriptions.length) {
            // The 'BETA_TESTER' role is only allowed for users who DO NOT have an active, paid subscription.
            // This includes people who may have cancelled their subscription, but are still within the
            // end of their billing period. So, if no active subscription is found, then we can allow the
            // user to have the 'BETA_TESTER' role:
            setCookie(
              process.env.NEXT_PUBLIC_BETA_USER_COOKIE_NAME,
              JSON.stringify(response?.data?.roles?.betaTester) || null,
              {
                secure: true,
                path: '/'
              }
            );
          }
        }
      }

      // @ts-ignore
      dispatch({
        type: ActionType.LOGIN,
        payload: {
          user
        }
      });

      return response;
    } catch (err) {
      return err?.response;
    }
  };

  const login = async (email, password, code = null) => {
    try {
      let response;
      if (code) {
        response = await axios.post(
          process.env.NEXT_PUBLIC_AUTHENTICATION_CONFIRM_FORGOT_PASSWORD_ENDPOINT,
          {
            username: email,
            newPassword: password,
            confirmationCode: code
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Cocina-Digital-Language': getCookie(process.env.NEXT_PUBLIC_LANGUAGE_COOKIE_NAME) || 'en'
            }
          }
        ).catch((error) => {
          if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
            // console.error(error.response.data);
            // console.error(error.response.status);
            // console.error(error.response.headers);

          } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
            // console.error(error.request);
          } else {
          // Something happened in setting up the request that triggered an Error
            // console.error('Error', error.message);
          }
        });
      } else {
        // @ts-ignore
        response = await axios.post(
          process.env.NEXT_PUBLIC_AUTHENTICATION_LOGIN_ENDPOINT,
          {
            email,
            password
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Cocina-Digital-Language': getCookie(process.env.NEXT_PUBLIC_LANGUAGE_COOKIE_NAME) || 'en'
            }
          }
        );
      }

      if (!response.data.idToken) {
        return;
      }

      const user = await authApi.me(response.data.idToken);
      if (typeof window !== 'undefined') {
        localStorage.setItem('userSiteConfigurations', JSON.stringify(response?.data?.userSiteConfigurations));
        // persist user profile data to session storage:
        sessionStorage.setItem('userProfile', JSON.stringify(response?.data?.userProfile));
        if (response?.data?.userProfile?.activeProfileImage !== undefined && response?.data?.userProfile?.activeProfileImage?.images?.length >= 2) {
          // Note: userProfile.activeProfileImage.images[1] is the 100x100 image:
          // save userProfilePicture to sessionStorage:
          globalThis.sessionStorage.setItem('userProfilePicture', response?.data?.userProfile?.activeProfileImage?.images[1]?.src);
        }
        // persist the user's organization data to session storage:
        sessionStorage.setItem('organizations', JSON.stringify(response?.data?.organizations));
      }

      // NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN
      // 1 minute = 1*60*1000 = 60000 milliseconds.
      // 29 minutes = 29*60*1000 = 1740000 milliseconds.
      // 30 minutes = 30*60*1000 = 1800000 milliseconds.
      const expires = new Date(Date.now() + (process.env.NEXT_PUBLIC_SESSION_TIMEOUT_IN_MINUTES * 60 * 1000));
      setCookie(
        process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN,
        response.data.idToken,
        {
          secure: true,
          path: '/',
          expires,
        }
      );

      // NEXT_PUBLIC_AUTHENTICATION_ACCESS_TOKEN
      setCookie(
        process.env.NEXT_PUBLIC_AUTHENTICATION_ACCESS_TOKEN,
        response.data.accessToken,
        {
          secure: true,
          path: '/'
        }
      );

      // NEXT_PUBLIC_AUTHENTICATION_REFRESH_TOKEN
      setCookie(
        process.env.NEXT_PUBLIC_AUTHENTICATION_REFRESH_TOKEN,
        response.data.refreshToken,
        {
          secure: true,
          path: '/'
        }
      );

      // NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN_EXPIRY
      setCookie(
        process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN_EXPIRY,
        Utilities.getDateXSecondsIntoTheFuture(response.data.expiryInSeconds),
        {
          secure: true,
          path: '/'
        }
      );

      // NEXT_PUBLIC_AUTHENTICATION_USER_ID
      setCookie(
        process.env.NEXT_PUBLIC_AUTHENTICATION_USER_ID,
        response.data.userId,
        {
          secure: true,
          path: '/'
        }
      );

      // NEXT_PUBLIC_AUTHENTICATION_USERNAME
      setCookie(
        process.env.NEXT_PUBLIC_AUTHENTICATION_USERNAME,
        response.data.username,
        {
          secure: true,
          path: '/'
        }
      );

      const currentDateTime = new Date();
      if (response?.data?.subscriptions?.length) {
        let hasActiveSubscription = false;
        if (response?.data?.subscriptions?.length) {
          const arrSubscriptions = response?.data?.subscriptions;
          for (const subscription of arrSubscriptions) {
            let isActiveSubscription = false;
            if ((subscription?.planStatus === 'CANCELLED' || subscription?.planStatus === 'CANCELED') && subscription?.isActive === true && subscription.endOfBillingPeriod !== undefined) {
              const endOfBillingPeriod = new Date(subscription?.endOfBillingPeriod);
              if (currentDateTime <= endOfBillingPeriod) {
                isActiveSubscription = true;

                setCookie(
                  process.env.NEXT_PUBLIC_SUBSCRIPTION_EXPIRATION_BILLING_DATE_COOKIE_NAME,
                  subscription?.endOfBillingPeriod,
                  {
                    secure: true,
                    path: '/'
                  }
                );
              }
            }

            if ((subscription?.planStatus === 'ACTIVE' && subscription?.isActive === true) || isActiveSubscription) {
              setCookie(
                process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_ID_COOKIE_NAME,
                subscription?.planId,
                {
                  secure: true,
                  path: '/'
                }
              );
              setCookie(
                process.env.NEXT_PUBLIC_SUBSCRIPTION_ID_COOKIE_NAME,
                subscription?.subscriptionId,
                {
                  secure: true,
                  path: '/'
                }
              );
              setCookie(
                process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_NAME_COOKIE_NAME,
                subscription?.planTierName?.toUpperCase(),
                {
                  secure: true,
                  path: '/'
                }
              );
              hasActiveSubscription = true;
              break;
            }
          }
        }
        if (!hasActiveSubscription) {
          // user has no active subscriptions, so we default him to the 'free tier' plan. Let's set that cookie:
          setCookie(
            process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_ID_COOKIE_NAME,
            process.env.NEXT_PUBLIC_FREE_SUBSCRIPTION_PLAN_NAME,
            {
              secure: true,
              path: '/'
            }
          );
          setCookie(
            process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_NAME_COOKIE_NAME,
            process.env.NEXT_PUBLIC_FREE_SUBSCRIPTION_PLAN_NAME,
            {
              secure: true,
              path: '/'
            }
          );
        }
      } else {
        // user has no subscriptions, so we default him to the 'free tier' plan. Let's set that cookie:
        setCookie(
          process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_ID_COOKIE_NAME,
          process.env.NEXT_PUBLIC_FREE_SUBSCRIPTION_PLAN_NAME,
          {
            secure: true,
            path: '/'
          }
        );
        setCookie(
          process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_NAME_COOKIE_NAME,
          process.env.NEXT_PUBLIC_FREE_SUBSCRIPTION_PLAN_NAME,
          {
            secure: true,
            path: '/'
          }
        );
      }

      if (response.data.roles?.list?.length) {
        let arrRoles = response.data.roles?.list;
        arrRoles = arrRoles.map(role => role.trim().toUpperCase());

        // handle BETA_TESTER:
        if (response.data.roles?.list?.includes('BETA_TESTER')) {
          if (!response.data.subscriptions.length) {
            // The 'BETA_TESTER' role is only allowed for users who DO NOT have an active, paid subscription.
            // This includes people who may have cancelled their subscription, but are still within the
            // end of their billing period. So, if no active subscription is found, then we can allow the
            // user to have the 'BETA_TESTER' role:
            setCookie(
              process.env.NEXT_PUBLIC_BETA_USER_COOKIE_NAME,
              JSON.stringify(response?.data?.roles?.betaTester) || null,
              {
                secure: true,
                path: '/'
              }
            );
          }
        }
      }

      // @ts-ignore
      dispatch({
        type: ActionType.LOGIN,
        payload: {
          user
        }
      });

      return response;
    } catch (err) {
      if (code) {
        return err?.response;
      }
      return err?.response;
    }
  };

  const logout = async () => {
    const idToken = getCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN);
    if (idToken) {
      await axios.post(
        process.env.NEXT_PUBLIC_AUTHENTICATION_LOGOUT_ENDPOINT,
        {},
        {
          headers: {
            Authorization: idToken,
          }
        }
      ).catch((err) => {
        if (err.response) {
          /*
          console.error('Error is: ', err.response.data);
          console.error('Error status is: ', err.response.status);
          console.error('Error headers is: ', err.response.headers);
          */
        }
      });
    }

    // Revoke the user's refresh token during logout:
    // Source: https://docs.aws.amazon.com/cognito/latest/developerguide/revocation-endpoint.html
    const refreshToken = getCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_REFRESH_TOKEN);
    if (refreshToken) {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/revoke`,
        {
          client_id: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
          token: refreshToken,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
      );
    }

    deleteCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN);
    deleteCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_ACCESS_TOKEN);
    deleteCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_REFRESH_TOKEN);
    deleteCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN_EXPIRY);
    deleteCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_USER_ID);
    deleteCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_USERNAME);

    // also, destroy any cookies related to the user's current subscription, if any:

    // IMPORTANT! When deleting a cookie and you're not relying on the default attributes, you must pass the exact same path and domain attributes that were used to set the cookie:
    // (source: https://www.npmjs.com/package/cookies-next)
    deleteCookie(process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_ID_COOKIE_NAME);
    deleteCookie(process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_NAME_COOKIE_NAME);
    deleteCookie(process.env.NEXT_PUBLIC_SUBSCRIPTION_ID_COOKIE_NAME);
    deleteCookie(process.env.NEXT_PUBLIC_SUBSCRIPTION_EXPIRATION_BILLING_DATE_COOKIE_NAME);
    deleteCookie(process.env.NEXT_PUBLIC_BETA_USER_COOKIE_NAME);

    // Destroy any session storage:
    if (typeof window !== 'undefined') {
      globalThis.sessionStorage.removeItem('userProfile');
      globalThis.sessionStorage.removeItem('userProfilePicture');
      globalThis.sessionStorage.removeItem('activeOrganization');
      globalThis.sessionStorage.removeItem('onboardingWizard');
      globalThis.sessionStorage.removeItem('organizations');
      globalThis.sessionStorage.removeItem('userSiteConfigurations');
    }

    // @ts-ignore
    dispatch({ type: ActionType.LOGOUT });
  };

  const register = async (email, password, name = null) => {
    let response;
    try {
      response = await axios.post(
        process.env.NEXT_PUBLIC_AUTHENTICATION_SIGNUP_ENDPOINT,
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Cocina-Digital-Language': getCookie(process.env.NEXT_PUBLIC_LANGUAGE_COOKIE_NAME) || 'en',
          }
        }
      );

      dispatch({
        type: ActionType.REGISTER,
        /*
        payload: {
          user
        }
        */
      });

      return response;
    } catch (err) {
      return err?.response;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        platform: 'JWT',
        confirmSignup,
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const AuthConsumer = AuthContext.Consumer;
