import {
  ButtonA,
  ButtonB,
  ButtonC,
  ButtonD
} from "../actionTypes";
import { INITIAL_STATE } from "../constants";

const initialState = INITIAL_STATE.DATA;

const dataReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ButtonA: {
      return {
        ...state,
        ButtonA: !state.ButtonA
      };
    }
    case ButtonB: {
      return {
        ...state,
        ButtonB: !state.ButtonB
      };
    }
    case ButtonC: {
      return {
        ...state,
        ButtonC: !state.ButtonC
      };
    }
    case ButtonD: {
      return {
        ...state,
        ButtonD: !state.ButtonD
      };
    }
    default:
      return state;
  }
};

export default dataReducer;
