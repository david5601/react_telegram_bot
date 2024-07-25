import { SET_ACCOUNT_ID, SET_TH_SPEED, SET_TRX_RATIO, SET_TRX_VALUE } from "./actionTypes";

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