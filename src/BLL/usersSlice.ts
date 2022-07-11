import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {followingInProgressType, followType, userType} from "../Types/types";
import {usersAPI} from "../DAL/usersAPI";
import {AppDispatch} from "./store";

const initialState = {
    users: [] as Array<userType>,
    totalCount: 0 as number,
    toggleInProgress: [] as [] | Array<number>,
    isLoading: false,
}

export const getUsers = (count = 1, page = 10) => async (dispatch: AppDispatch) => {
    dispatch(setLoad(true))
    const response = await usersAPI.getUsers(count, page)
    dispatch(setUsers(response.items))
    dispatch(setTotalCount(response.totalCount))
    dispatch(setLoad(false))
}

export const follow = (userId: number) => async (dispatch: AppDispatch) => {
    dispatch(setFollowInProgress({loading: true, id: userId}))
    const response = await usersAPI.follow(userId)
    if (response.resultCode === 0) {
        dispatch(setFollow({id: userId, follow: true}))
        dispatch(setFollowInProgress({loading: false, id: userId}))
    }
}

export const unfollow = (userId: number) => async (dispatch: AppDispatch) => {
    dispatch(setFollowInProgress({loading: true, id: userId}))
    const response = await usersAPI.unfollow(userId)
    if (response.resultCode === 0) {
        dispatch(setFollow({id: userId, follow: false}))
        dispatch(setFollowInProgress({loading: false, id: userId}))
    }
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setLoad(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setUsers(state, action: PayloadAction<Array<userType>>) {
            state.users = action.payload
        },
        setTotalCount(state, action: PayloadAction<number>) {
            state.totalCount = action.payload
        },
        setFollow(state, action: PayloadAction<followType>) {
            state.users = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return {...user, followed: action.payload.follow}
                }
                return user
            })
        },
        setFollowInProgress(state, action: PayloadAction<followingInProgressType>) {
            state.toggleInProgress = action.payload.loading
                ? [...state.toggleInProgress, action.payload.id]
                : state.toggleInProgress.filter(id => id !== action.payload.id)
        }
    },
})

export const {setLoad, setUsers, setTotalCount, setFollow, setFollowInProgress} = usersSlice.actions

export default usersSlice.reducer