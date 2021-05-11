import React, { useState, useContext } from 'react'
import Input from './Input';
import Button from './Button';
import { Link, Redirect } from 'react-router-dom'
import {Context} from '../store/Context'

function Login() {

  let {user, login} = useContext(Context)

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let userModel = {
      name: null,
      email: email,
      password: password
    }
    user.email = email
    user.password = password
    if(user.isAuth)  return <Redirect to={'/'} />  
    return <form onSubmit={
        (event) => {
          event.preventDefault();
          login(userModel);
          }
    }>
                <div className='wrapper flexCenter'>
                    <h3>Login</h3>
                    <label>Email</label><Input children={'email'} required={true} onChange={(event) => {setEmail(event.target.value)}}></Input>
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