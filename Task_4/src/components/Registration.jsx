import React, { useState } from 'react'
import Input from './Input';
import Button from './Button';
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios';

function Registration() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [toLogin, setToLogin] = useState(false);
    const UserModel = {
        name: name,
        email: email,
        password: password
      }
    if (toLogin) {
        return <Redirect to='/login' />    
    }
    return <form onSubmit={
        (event) => {
            Axios.post("http://localhost:3000/register",
                        UserModel
                ).then(res => {
                    let responseData = res.data
                    if (responseData.successful) {
                        setToLogin(true);
                    } else {
                      alert('Something went wrong while registration')
                    }
                })
                event.preventDefault();
            }
        }>

                <div className='wrapper flexCenter'>
                    <h3>Registration</h3>
                    <label>Name</label><Input required={true} onChange={(event) => setName(event.target.value)}></Input>
                    <label>Email</label><Input children={'email'} required={true} onChange={(event) => setEmail(event.target.value)}></Input>
                    <label>Password</label><Input children={'password'} required={true} onChange={(event) => setPassword(event.target.value)}></Input>
                    <Button children='Registration' className='buttonLogin'></Button>
                    <div>
                        <div className='detailInfo'><p>If you have an account you can</p></div>
                        <div className='detailInfo'><Link to="/login"><a>login</a></Link></div>
                    </div>
                    <p></p><link rel="stylesheet" href=""/>
                </div>
            </form>
            
    }    

export default Registration;