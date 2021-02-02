import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "redux";
import thunk from "redux-thunk";
import { ThunkAction } from "redux-thunk";
import dataReducer from "./DataReducer";

let reducers = combineReducers({
  dataReducer,
});

type RootReducersType = typeof reducers;
export type AppStateType = ReturnType<RootReducersType>;

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionType<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>;

export type BaseThunkActionType<
  AT extends Action,
  R = Promise<void>
> = ThunkAction<R, AppStateType, unknown, AT>;
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

//let store = createStore(reducers,applyMiddleware(thunk));

//@ts-ignore
window._store_ = store;
export default store;
