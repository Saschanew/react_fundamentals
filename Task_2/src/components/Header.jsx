import React from 'react';
import Logo from './Logo';
import Button from './Button';
import UserName from './UserName';
import { Link } from 'react-router-dom'

function Header() {
    return     <header>
                    <div className="wrapper flex">
                        <Logo></Logo>
                        <div className="flex">
                            <UserName></UserName>
                            <Link to="/login">
                                <Button children='Log in' className="classButtonHeader"></Button>
                            </Link>
                        </div>
                    </div>
                </header> 
}

export default Header;

