import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../BLL/store";
import {Navigate} from "react-router-dom";
import React from "react";
import {useForm} from "react-hook-form";
import {login} from "../../BLL/authSlice";

const Login = () => {

    const isAuth = useSelector((state: RootState) => state.auth.isAuth)
    const dispatch = useDispatch<AppDispatch>()

    const {register, handleSubmit} = useForm()

    if (isAuth) {
        return <Navigate replace to="/profile"/>
    }

    const onSubmit = (data: any) => {
        dispatch(login(data.email, data.password))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div><input {...register('email')} placeholder='login'/></div>
                <div><input {...register('password')} placeholder='password' type="password"/></div>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Login