
import { SET_TOKEN, CLEAR_TOKEN } from "../actions/actionTypes";

interface AuthState {
  user: any; // Adjust types as needed
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case CLEAR_TOKEN:
      return { ...state, token: null };
    default:
      return state;
  }
};

export default authReducer;
