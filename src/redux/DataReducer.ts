import { getData } from "../api";
import { DataType } from "../types/type";
import { BaseThunkActionType, InferActionType } from "./ReduxStore";

let initionalState = {
  data: [] as Array<DataType>,
  isFetching: false as boolean,
};

export type InitionalStateType = typeof initionalState;
type ActionType = InferActionType<typeof action>;
type ThunkActionType = BaseThunkActionType<ActionType>;

const dataReducer = (
  state = initionalState,
  action: ActionType
): InitionalStateType => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, data: action.data };
    }
    case "TOGGLE_IS_FETING": {
      return { ...state, isFetching: action.payload };
    }
    default:
      return state;
  }
};

export const action = {
  setData: (data: Array<DataType>) => ({ type: "SET_DATA", data } as const),
  toggleIsFeting: (isFeting: boolean) =>
    ({ type: "TOGGLE_IS_FETING", payload: isFeting } as const),
};

export const getDataTC = (): ThunkActionType => async (dispatch, getState) => {
  dispatch(action.toggleIsFeting(true));
  const respons = await getData();
  dispatch(action.setData(respons));
  dispatch(action.toggleIsFeting(false));
};

export default dataReducer;
