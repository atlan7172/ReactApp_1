import {configureStore} from '@reduxjs/toolkit'
import profileReducer from "./profileSlice";
import authReducer from "./authSlice";
import usersReducer from "./usersSlice";
import appReducer from "./appSlice";

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        auth: authReducer,
        users: usersReducer,
        app: appReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch