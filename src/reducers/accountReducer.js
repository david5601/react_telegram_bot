import { SET_ACCOUNT_ID, SET_ACCOUNT_USERNAME, SET_REFERRAL_ID, SET_TH_SPEED, SET_TRX_RATIO, SET_TRX_VALUE, SET_BNB_RATIO, SET_BNB_VALUE, SET_IS_BNB, SET_ACCOUNT } from "../actions/actionTypes";

const initialState = {
    accountID: null,
    accountUsername: null,
    referralID: null,
    thSpeed: null,
    trxRatio: null,
    trxValue: null,
    bnbRatio: null,
    bnbValue: null,
    isBnb: false,
    account: null
}

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCOUNT_ID:
            return {
                ...state,
                accountID: action.payload,
            };
            
        case SET_ACCOUNT_USERNAME:
            return {
                ...state,
                accountUsername: action.payload,
            };

        case SET_REFERRAL_ID:
            return {
                ...state,
                referralID: action.payload,
            };

        case SET_TH_SPEED:
            return {
                ...state,
                thSpeed: action.payload,
            };
        case SET_TRX_RATIO:
            return {
                ...state,
                trxRatio: action.payload,
            }
        case SET_TRX_VALUE:
            return {
                ...state,
                trxValue: action.payload,
            }
        case SET_BNB_RATIO:
            return {
                ...state,
                bnbRatio: action.payload,
            }
        case SET_BNB_VALUE:
            return {
                ...state,
                bnbValue: action.payload,
            }
        case SET_IS_BNB:
            return {
                ...state,
                isBnb: action.payload,
            }
        case SET_ACCOUNT:
            return {
                ...state,
                account: action.payload
            }
        default:
            return state;
    }
};

export default accountReducer;