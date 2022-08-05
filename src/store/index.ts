import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "./slices/auth.slice";
import counterReducer from "./slices/counter.slice";

const reducer = combineReducers({
    auth: authReducer,
    counter: counterReducer,
});

const customStore = configureStore({
    reducer,
});

export default customStore;

export type AppDispatch = typeof customStore.dispatch;
export type RootState = ReturnType<typeof customStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
