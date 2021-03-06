import {React, useContext} from 'react';
import Logo from './Logo';
import Button from './Button';
import UserName from './UserName';
import { Link } from 'react-router-dom'
import {Context} from '../store/Context'

function Header() {
    let {user} = useContext(Context)
    let buttenName = user.isAuth ? 'Logout' : 'Log in'
    return     <header>
                    <div className="wrapper flex">
                        <Logo></Logo>
                        <div className="flex">
                            <UserName>{user.name}</UserName>
                            <Link to="/login">
                                <Button children={buttenName} className="classButtonHeader"></Button>
                            </Link>
                        </div>
                    </div>
                </header> 
}

export default Header;

