import UserActionTypes from "./user.types";

const INITIAL_STATE = {
	currentUser: null,
	signUpError: null,
	signInError: null,
	signOutError: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				signInError: null,
			};
		case UserActionTypes.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				signOutError: null,
			};
		case UserActionTypes.SIGN_IN_FAILURE:
			return {
				...state,
				signInError: action.payload,
			};
		case UserActionTypes.SIGN_UP_FAILURE:
			return {
				...state,
				signUpError: action.payload,
			};
		case UserActionTypes.SIGN_OUT_FAILURE:
			return {
				...state,
				signOutError: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
