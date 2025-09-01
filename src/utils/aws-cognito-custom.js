/* eslint-disable consistent-return */
import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import { Utilities } from './utilities';

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

/**
 * Checks the expiry of the Id token and refreshes it if it is expired by using the refresh token.
 * source: https://www.npmjs.com/package/amazon-cognito-identity-js (see use case 32)
 *
 * @returns boolean indicating whether the function executed successfully
 */
export const refreshIdTokenAsNeeded = async () => {
  try {
    if (getCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN)) {
      return true;
    }

    // if we made it here, the Id token is expired. We need to use the refresh token to request new access and Id tokens:
    const refreshToken = getCookie(process.env.NEXT_PUBLIC_AUTHENTICATION_REFRESH_TOKEN);
    if (!refreshToken) {
      return false;
    }
    const newTokens = await axios.post(
      `${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}/oauth2/token`,
      {
        client_id: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
    );

    // If everything went right, the variable newTokens should contain this shape:
    /*
    newTokens = {
      data: {
        access_token: '...',
        expires_in: ...,
        id_token: '...',
        token_type: 'Bearer'
      }
    }
    */

    if (newTokens.data.id_token !== undefined) {
      // NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN
      // 1 minute = 1*60*1000 = 60000 milliseconds.
      // 29 minutes = 29*60*1000 = 1740000 milliseconds.
      // 30 minutes = 30*60*1000 = 1800000 milliseconds.
      const expires = new Date(Date.now() + (process.env.NEXT_PUBLIC_SESSION_TIMEOUT_IN_MINUTES * 60 * 1000));
      setCookie(
        process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN,
        newTokens.data.id_token,
        {
          secure: true,
          path: '/',
          expires
        }
      );

      // NEXT_PUBLIC_AUTHENTICATION_ACCESS_TOKEN
      setCookie(
        process.env.NEXT_PUBLIC_AUTHENTICATION_ACCESS_TOKEN,
        newTokens.data.access_token,
        {
          secure: true,
          path: '/'
        }
      );

      // NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN_EXPIRY
      setCookie(
        process.env.NEXT_PUBLIC_AUTHENTICATION_ID_TOKEN_EXPIRY,
        Utilities.getDateXSecondsIntoTheFuture(newTokens.data.expires_in),
        {
          secure: true,
          path: '/'
        }
      );
    } else {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
};
