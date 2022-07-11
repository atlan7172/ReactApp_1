import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {authAPI} from "../DAL/authAPI";
import {AppDispatch} from "./store";
import {authMeType} from "../Types/types";

const initialState = {
    id: 0 as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
}

export const authMe = () => async (dispatch: AppDispatch) => {
    const response = await authAPI.authMe()
    if (response.resultCode === 0) {
        const {id, email, login} = response.data
        dispatch(setAuth({id: id, email: email, login: login, isAuth: true}))
    }
}

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
    const response = await authAPI.login(email, password)
    if (response.resultCode === 0) {
        dispatch(authMe())
    }
}

export const logout = () => async (dispatch: AppDispatch) => {
    await authAPI.logout()
    dispatch(setAuth({id: null, email: null, login: null, isAuth: false}))
}

export const profileSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<authMeType>) {
            state.id = action.payload.id
            state.email = action.payload.email
            state.login = action.payload.login
            state.isAuth = action.payload.isAuth
        }
    }
})

export const {setAuth} = profileSlice.actions

export default profileSlice.reducer