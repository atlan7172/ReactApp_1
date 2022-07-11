import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {photoType, profileType} from "../Types/types";
import {profileAPI} from "../DAL/profileAPI";
import {AppDispatch} from "./store";

const initialState = {
    profile: {} as profileType,
    status: '' as string
}

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async (userId: number, thunkAPI) => {
        return await profileAPI.getProfile(userId)
    }
)

export const getStatus = createAsyncThunk(
    'profile/getStatus',
    async (userId: number) => {
        return await profileAPI.getStatus(userId)
    }
)

export const setStatus = (status: string) => async (dispatch: AppDispatch) => {
    const response = await profileAPI.putStatus(status)
    dispatch(setStatusAC(status))
    return response.data
}

export const addProfile = createAsyncThunk(
    'profile/setProfile',
    async (profile: profileType) => {
        const response = await profileAPI.putProfile(profile)
        return response.data
    }
)

export const addPhoto = createAsyncThunk(
    'profile/addPhoto',
    async (photo: string) => {
        const response = await profileAPI.putProfilePhoto(photo)
        return response.data
    }
)

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addProfileAC(state, action: PayloadAction<profileType>) {
            state.profile = action.payload
        },
        setStatusAC(state, action: PayloadAction<string>) {
            state.status = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProfile.fulfilled, (state, action: PayloadAction<profileType>) => {
            state.profile = action.payload
        })
        builder.addCase(getStatus.fulfilled, (state, action: PayloadAction<string>) => {
            state.status = action.payload
        })
        builder.addCase(addProfile.fulfilled, (state, action: PayloadAction<any>) => {
            state.profile = action.payload
        })
        builder.addCase(addPhoto.fulfilled, (state, action: PayloadAction<photoType>) => {
            state.profile.photos = action.payload
        })
    }
})

export const {addProfileAC, setStatusAC} = profileSlice.actions

export default profileSlice.reducer