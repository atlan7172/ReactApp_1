import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='navigation'>
            <div className='navigation__item'><Link to='/profile'>Profile</Link></div>
            <div className='navigation__item'><Link to='/dialogs'>Messages</Link></div>
            <div className='navigation__item'><Link to='/users'>Users</Link></div>
            <div className='navigation__item'><Link to='/music'>Music</Link></div>
            <div className='navigation__item'><Link to='/settings'>Settings</Link></div>
        </nav>
    )
}

export default NavBar