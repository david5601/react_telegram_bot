import { SET_ACCOUNT_ID } from "./actionTypes";

export const setAccountId = (accoutID) => ({
    type: SET_ACCOUNT_ID,
    payload: accoutID,
});