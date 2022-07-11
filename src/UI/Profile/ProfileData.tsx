import {FC} from "react"
import {useSelector} from "react-redux";
import {RootState} from "../../BLL/store";

type propsType = {
    isOwner: boolean
    changeMode: () => void
}

const ProfileData: FC<propsType> = ({isOwner, changeMode}) => {

    const profile = useSelector((state: RootState) => state.profile.profile)

    return (
        <div>
            {isOwner && <button onClick={changeMode}>UPDATE</button>}
            <div>
                <div><b>Full name: </b>{profile.fullName}</div>
                <div><b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}</div>
                <div><b>Description: </b>{profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}

export default ProfileData