import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../BLL/store";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {logout} from "../BLL/authSlice";
import React from "react";

const Header = () => {

    const isAuth = useSelector((state: RootState) => state.auth.isAuth)
    const login = useSelector((state: RootState) => state.auth.login)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const onLogout = () => {
        navigate('/login')
        dispatch(logout())
    }

    return (
        <div className='header'>
            <div className='header__inner'>
                <div className='logo'>LOGO</div>
                <div className='login'>
                    {isAuth
                        ? <div onClick={() => onLogout()}>{login} - <button>LOG OUT</button></div>
                        : <div><Link to={'/login'}>LOGIN</Link></div>}
                </div>
            </div>
        </div>
    )
}

export default Header