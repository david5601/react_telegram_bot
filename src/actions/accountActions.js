import { SET_ACCOUNT_ID, SET_TH_SPEED, SET_TRX_RATIO, SET_TRX_VALUE, SET_BNB_RATIO, SET_BNB_VALUE, SET_IS_BNB } from "./actionTypes";

export const setAccountId = (accoutID) => ({
    type: SET_ACCOUNT_ID,
    payload: accoutID,
});

export const setTHSpeed = (thSpeed) => ({
    type: SET_TH_SPEED,
    payload: thSpeed,
})


export const setTrxValue = (trxValue) => ({
    type: SET_TRX_VALUE,
    payload: trxValue,
})


export const setTrxRatio = (ratio) => ({
    type: SET_TRX_RATIO,
    payload: ratio,
})

export const setBNBValue = (bnbValue) => ({
    type: SET_BNB_VALUE,
    payload: bnbValue,
})


export const setBNBRatio = (ratio) => ({
    type: SET_BNB_RATIO,
    payload: ratio,
})

export const setIsBnb = (isBnb) => ({
    type: SET_IS_BNB,
    payload: isBnb,
})