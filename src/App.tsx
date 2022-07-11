import React, {useEffect} from 'react';
import './App.css';
import Header from "./UI/Header";
import NavBar from "./UI/NavBar";
import {Route, Routes} from "react-router-dom";
import Profile from "./UI/Profile/Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./BLL/store";
import Login from "./UI/Login/Login";
import Users from "./UI/Users/Users";
import {appAuth} from "./BLL/appSlice";

const App = () => {

    const dispatch = useDispatch<AppDispatch>()
    const auth = useSelector((state: RootState) => state.app.isAuthorized)

    useEffect(() => {
        dispatch(appAuth())
    }, [auth])

    if (!auth) return <div>INITIALIZING</div>
    return (
        <div className="app-wrapper">
            <Header/>
            <div className='content'>
                <NavBar/>
                <div className='pages'>
                    <Routes>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/profile/:userId' element={<Profile/>}/>
                        <Route path='/users' element={<Users/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App;
