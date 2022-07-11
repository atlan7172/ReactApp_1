export type responseType<D> = {
    data: D
    resultCode: number
    messages: Array<string>
}

export type authMeType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos: photoType
}

export type getProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos: photoType
}

export type photoType = {
    small: string
    large: string
}

export type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type usersType = {
    items: Array<userType>
    totalCount: number
    error: string
}

export type userType = {
    id: number
    name: string
    status: string
    photos: photoType
    followed: boolean
}

export type loginType = {
    email: string
    password: string
}

export type followType = {
    id: number
    follow: boolean
}

export type followingInProgressType = {
    id: number
    loading: boolean
}