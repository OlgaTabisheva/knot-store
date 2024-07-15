import { combineReducers } from "redux";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import goodsReducer from './slice/goodsSlice';
import authSlice from './slice/authSlice';

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

export const store = configureStore({
    reducer: combineReducers({
        router: routerReducer,
        goods: goodsReducer,
        auth: authSlice
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware),
    
});

export const history = createReduxHistory(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;