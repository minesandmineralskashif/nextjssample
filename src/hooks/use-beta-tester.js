import { getCookie, setCookie } from 'cookies-next';
import { useEffect } from 'react';

export const useIsActiveBetaTester = () => {
  let isActiveBetaTester = false;
  // useEffect(() => {
  let betaTesterCookie = getCookie(process.env.NEXT_PUBLIC_BETA_USER_COOKIE_NAME) || null;
  if (betaTesterCookie) {
    betaTesterCookie = betaTesterCookie.indexOf('promotionType') !== -1 ? JSON.parse(betaTesterCookie) : { promotionType: 'BetaTester', validityOfPromotionInDays: 30, datetimeRecordLastModified: new Date() };
  }

  if (betaTesterCookie?.validityOfPromotionInDays && betaTesterCookie?.datetimeRecordLastModified) {
    const now = new Date();
    const dateRecordLastModified = new Date(betaTesterCookie?.datetimeRecordLastModified);
    const { validityOfPromotionInDays } = betaTesterCookie;
    const dateRecordExpires = new Date(dateRecordLastModified.setDate(dateRecordLastModified.getDate() + validityOfPromotionInDays));
    if (now <= dateRecordExpires) {
      isActiveBetaTester = true;
    }
  }
  return isActiveBetaTester;
};

export const useDaysLeftAsBetaTester = () => {
  let daysLeftAsBetaTester = 0;
  // useEffect(() => {
  let betaTesterCookie = getCookie(process.env.NEXT_PUBLIC_BETA_USER_COOKIE_NAME) || null;
  if (betaTesterCookie) {
    betaTesterCookie = betaTesterCookie.indexOf('promotionType') !== -1 ? JSON.parse(betaTesterCookie) : { promotionType: 'BetaTester', validityOfPromotionInDays: 30, datetimeRecordLastModified: new Date() };
  }

  if (betaTesterCookie?.validityOfPromotionInDays && betaTesterCookie?.datetimeRecordLastModified) {
    const now = new Date();
    const dateRecordLastModified = new Date(betaTesterCookie?.datetimeRecordLastModified);
    const { validityOfPromotionInDays } = betaTesterCookie;
    const dateRecordExpires = new Date(dateRecordLastModified.setDate(dateRecordLastModified.getDate() + validityOfPromotionInDays));

    if (now <= dateRecordExpires) {
      daysLeftAsBetaTester = Math.ceil((dateRecordExpires - now) / (1000 * 60 * 60 * 24));
    }
  }
  // }, []);
  return daysLeftAsBetaTester;
};
