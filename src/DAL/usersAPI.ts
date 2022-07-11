import {instance} from "./API";
import {responseType, usersType} from "../Types/types";

export const usersAPI = {
    getUsers(count: number, page: number) {
        return instance.get<usersType>(`users?page=${count}&count=${page}`).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<responseType<{}>>('follow/' + userId).then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete<responseType<{}>>('follow/' + userId).then(response => response.data)
    }
}