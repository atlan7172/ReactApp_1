import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../BLL/store";
import {getUsers} from "../../BLL/usersSlice";
import User from "./User";
import Pagination from "./Pagination";

const Users = () => {

    const dispatch = useDispatch<AppDispatch>()
    const users = useSelector((state: RootState) => state.users.users)
    const usersList = users.map(user => <User key={user.id} user={user}/>)
    const changePage = (number: number) => {
        dispatch(getUsers(number))
    }

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <div>
            {usersList}
            <Pagination changePage={changePage}/>
        </div>
    )
}

export default Users