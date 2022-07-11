import {instance} from "./API";
import {getProfileType, photoType, profileType, responseType} from "../Types/types";

export const profileAPI = {
    putProfile(profile: profileType) {
        return instance.put<responseType<{}>>('profile', profile).then(response => response.data)
    },
    putProfilePhoto(imageFile: string) {
        let bodyFormData = new FormData();
        bodyFormData.append('image', imageFile);
        return instance.put<responseType<photoType>>('profile/photo', bodyFormData, {headers: {"Content-Type": "multipart/form-data"}}).then(response => response.data)
    },
    putStatus(status: string) {
        return instance.put<responseType<string>>('profile/status', {status}).then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get('profile/status/' + userId).then(response => response.data)
    },
    getProfile(userId: number) {
        return instance.get<getProfileType>('profile/' + userId).then(response => response.data)
    }
}