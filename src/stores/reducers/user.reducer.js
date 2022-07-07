import {
  LOG_OUT,
  SIGNIN_SUCCESS,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  UPDATE_PROFILE,
  UPDATE_PROFILE_PIC,
  SIGNIN,
  SIGNIN_FAILED,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  OTP,
  OTP_SUCCESS,
  OTP_FAILD,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  GET_STORY_CATEGORIES,
  GET_STORY_CATEGORIES_SUCCESS,
  GET_STORY_CATEGORIES_FAILED,
  GET_STORY,
  GET_STORY_SUCCESS,
  GET_STORY_FAILED,
  SKIP_ONBOARDING,
} from '../actions/actionType';

const initialState = {
  users: null,
  isLoading: false,
  getStoryCategories: null,
  getStory: null,
  showOnboarding: false,
};

export const userReducer = (state = initialState, action) => {
  const {payload} = action;
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        isLoading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case SIGNIN:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNIN_SUCCESS:
      console.log({state});
      return {
        ...state,
        users: payload,
        isLoading: false,
      };

    case SIGNIN_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case FORGOT_PASSWORD:
      return {
        ...state,
        isLoading: true,
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // users: payload,
      };
    case FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case OTP:
      // console.log('userData signUp reducer', payload)
      return {
        ...state,
        isLoading: true,
      };

    case OTP_SUCCESS:
      // console.log('userData signUp reducer', payload)
      return {
        ...state,
        isLoading: false,
      };
    case OTP_FAILD:
      // console.log('userData signUp reducer', payload)
      return {
        ...state,
        isLoading: false,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        isLoading: true,
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case RESET_PASSWORD_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case GET_STORY_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      };

    case GET_STORY_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        getStoryCategories: payload,
      };
    case GET_STORY_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case GET_STORY:
      return {
        ...state,
        isLoading: true,
      };

    case GET_STORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        getStory: payload,
      };
    case GET_STORY_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case SKIP_ONBOARDING:
      return {
        ...state,
        showOnboarding: payload,
      };

    case 'For_Onboarding':
      return {
        ...state,
        showOnboarding: payload,
      };
    case LOG_OUT:
      return {
        ...state,
        users: null,
        isLoading: false,
        getStoryCategories: null,
        getStory: null,
      };

    default:
      return state;
  }
};

export default userReducer;
