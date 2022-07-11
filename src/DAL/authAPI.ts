import {authMeType, responseType} from "../Types/types";
import { instance } from "./API";

export const authAPI = {
    authMe() {
        return instance.get<responseType<authMeType>>('auth/me').then(response => response.data)
    },
    login(email: string, password: string) {
        return instance.post<responseType<{}>>('auth/login', {email, password}).then(response => response.data)
    },
    logout() {
        return instance.delete<responseType<{}>>('auth/login').then(response => response.data)
    }
}