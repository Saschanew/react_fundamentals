import React from 'react'
import Input from './Input';
import Button from './Button';

function Login() {
    return <form>
                <div className='flexCenter'>
                    <label>Email</label><Input children={'email'}></Input>
                    <label>Password</label><Input children={'password'}></Input>
                    <Button children='Login'></Button>
                    <p>If you don't have an account please go to</p><link rel="stylesheet" href=""/>
                </div>
            </form>
    
}    

export default Login;