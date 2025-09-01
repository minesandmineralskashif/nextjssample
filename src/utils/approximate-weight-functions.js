import axios from 'axios';

import {
  refreshIdTokenAsNeeded
} from './aws-cognito-custom';

/**
 * Meant to INSERT or UPDATE a new approximate weight record into the database.
 *
 * Note: no error handling is done here. That is left to the calling function.
 */
export const addApproximateWeight = async (values, organizationIdOfUser, accessToken, endpointUrl, logout, router) => {
  const payload = {
    id: values?.id ? values.id : null,

    isActive: values.isActive,
    ingredient: values.ingredient,
    keywords: values.keywords.split(','),

    locale: values.locale || navigator.languages[0],

    category: values.category,
    description: values.description,

    approximateWeight: {
      perUnitWeightInGrams: values.approximateWeight?.perUnitWeightInGrams || '',
      perTablespoonWeightInGrams: values.approximateWeight?.perTablespoonWeightInGrams || '',
    },

    additionalLocales: [...values.additionalLocales],

    pendingReview: {
      isPendingReview: values.pendingReview?.isPendingReview || false,
      pendingReviewReason: values.pendingReview?.pendingReviewReason || '',
      pendingReviewComments: values.pendingReview?.pendingReviewComments || '',
    }

  };

  const hasIdToken = await refreshIdTokenAsNeeded();
  if (!hasIdToken) {
    logout();
    router.push('/').catch(console.error);
  }
  const response = await axios.post(
    endpointUrl,
    payload,
    {
      headers: {
        Authorization: accessToken,
        'Organization-Id': organizationIdOfUser,
      }
    }
  ).catch((error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 401) {
        logout();
        router.push('/').catch(console.error);
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
    } else {
      // Something happened in setting up the request that triggered an Error
    }
  });

  return response;
};
