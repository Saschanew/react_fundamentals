import React from 'react';
import Logo from './Logo';
import Button from './Button';
import UserName from './UserName';

export default function Header() {
    return     <header>
                    <div className="wrapper flex">
                        <Logo></Logo>
                        <div className="flex">
                            <UserName userName='Dave'></UserName>
                            <Button children='Log out' className="classButtonHeader"></Button>
                        </div>
                    </div>
                </header> 
}

