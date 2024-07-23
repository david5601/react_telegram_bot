import { SET_ACCOUNT_ID } from "../actions/actionTypes";

const initialState = {
    accountID: null,
}

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCOUNT_ID:
            return {
                ...state,
                accountID: action.payload,
            };
        default:
            return state;
    }
};

export default accountReducer;