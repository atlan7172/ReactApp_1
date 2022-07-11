import {FC, useState} from "react";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../BLL/store";
import {addPhoto, addProfile} from "../../BLL/profileSlice";
import {profileType} from "../../Types/types";

type propsType = {
    isOwner: boolean
}

const ProfileInfo: FC<propsType> = ({isOwner}) => {

    const profile = useSelector((state: RootState) => state.profile.profile)
    const [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch<AppDispatch>()

    const loadPhoto = (e: any) => {
        const photo = e.target.files[0]
        dispatch(addPhoto(photo))
    }

    const changeMode = () => {
        setEditMode(true)
    }

    const onSubmit = (profile: any) => {
        dispatch(addProfile(profile))
        setEditMode(false)
    }

    return (
        <div>
            <div>
                {profile.photos ? <img src={profile.photos.small}/> : <div>avatar</div>}
                {isOwner && <input type='file' onChange={loadPhoto}/>}
            </div>
            {editMode
                ? <ProfileDataForm onSubmit={onSubmit}/>
                : <ProfileData isOwner={isOwner} changeMode={changeMode}/>
            }
        </div>
    )
}

export default ProfileInfo