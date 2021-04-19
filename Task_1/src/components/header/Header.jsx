import React from 'react';
import Logo from '../logo/Logo';
import Button from '../button/Button';
import UserName from '../userName/UserName';

export default function Header() {
    return     <header>
                    <div className="wrapper flex">
                        <Logo></Logo>
                        <div className="flex">
                            <UserName userName='Dave'></UserName>
                            <Button name="Log out" className="classButtonHeader"></Button>
                        </div>
                    </div>
                </header> 
}

