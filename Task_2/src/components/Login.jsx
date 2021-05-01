import React, { useState } from 'react'
import Input from './Input';
import Button from './Button';
import { Link } from 'react-router-dom'
import Axios from 'axios';

function Login() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const UserModel = {
        name: null,
        email: email,
        password: password
      }
    return <form onSubmit={
        (event) => {
            Axios.post("http://localhost:3000/login",
                        UserModel
                ).then(res => {
                    let responseData = res.data
                    if (responseData.successful) {
                      localStorage.setItem('token', responseData)
                    } else {
                      alert('Something went wrong while login')
                    }
                })
                event.preventDefault();
        }
    }>
                <div className='wrapper flexCenter'>
                    <h3>Login</h3>
                    <label>Email</label><Input children={'email'} required={true} onChange={(event) => setEmail(event.target.value)}></Input>
                    <label>Password</label><Input children={'password'} required={true} onChange={(event) => setPassword(event.target.value)}></Input>
                    <Button children='Login' className='buttonLogin'></Button>
                    <div>
                        <div className='detailInfo'><p>If you don't have an account please go to</p></div>
                        <div className='detailInfo'><Link to="/registration"><a>registration</a></Link></div>
                    </div>
                </div>
            </form>
    
}    

export default Login;