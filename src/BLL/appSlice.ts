import {createSlice} from '@reduxjs/toolkit'
import {AppDispatch} from "./store";
import {authMe} from "./authSlice";

const initialState = {
    isAuthorized: false
}

export const appAuth = () => async (dispatch: AppDispatch) => {
    await dispatch(authMe())
    dispatch(setApp())
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setApp(state) {
            state.isAuthorized = true
        }
    },
})

export const {setApp} = appSlice.actions

export default appSlice.reducer