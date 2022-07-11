import {userType} from "../../Types/types";
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../BLL/store";
import {follow, unfollow} from "../../BLL/usersSlice";
import {Link} from "react-router-dom";

type propsType = {
    user: userType
}

const User: FC<propsType> = ({user}) => {

    const dispatch = useDispatch<AppDispatch>()
    const followingInProgress = useSelector((state: RootState) => state.users.toggleInProgress)

    return (
        <div>
            <Link to={'/profile/' + user.id}>
                {user.photos.small ? <img src={user.photos.small}/> : <div>AVATAR</div>}
                <b>{user.name}</b>
            </Link>
            {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => dispatch(unfollow(user.id))}>UNFOLLOW</button>
                : <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => dispatch(follow(user.id))}>FOLLOW</button>}
        </div>
    )
}

export default User