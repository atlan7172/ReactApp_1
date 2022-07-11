import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../BLL/store";
import {useEffect} from "react";
import ProfileStatus from "./ProfileStatus";
import {getProfile, getStatus} from "../../BLL/profileSlice";
import {useParams} from "react-router-dom";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {

    let id = useSelector((state: RootState) => state.auth.id)
    const isAuth = useSelector((state: RootState) => state.auth.isAuth)
    const dispatch = useDispatch<AppDispatch>()
    let params = useParams<string>()
    let userId = Number(params.userId)

    useEffect(() => {
        if (!userId) {
            // @ts-ignore
            userId = id
        }
        dispatch(getProfile(userId))
        dispatch(getStatus(userId))
    }, [userId])

    return (
        <div>
            {
                isAuth ?
                    <div>
                        <ProfileInfo isOwner={!userId}/>
                        <ProfileStatus isOwner={!userId}/>
                    </div>
                    :<div>LOG IN TO SEE THIS PAGE</div>
            }
        </div>
    )
}

export default Profile