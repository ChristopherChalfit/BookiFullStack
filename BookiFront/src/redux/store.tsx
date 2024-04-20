import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { selectUser, userSlice } from "./reducers/user.reducer";
import { authSlice, selectAuth } from "./reducers/auth.reducer";


export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    auth: authSlice.reducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
