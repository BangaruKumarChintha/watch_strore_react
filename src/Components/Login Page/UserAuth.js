import React,{useState} from 'react'
import {auth} from './firebase';

const UserAuth = () => {
    const [data,setData] = useState({
        email:"",
        password:""
    })
    const {email,password} = data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const signUp = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then(
            user => console.log(user)
            ).catch(err => console.log(err))
    }
    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(
            user => console.log(user)
            ).catch(err => console.log(err))
    }
    return (
        <div className='login d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
            <center className='form_container p-5 rounded bg-white'>
                <form autoComplete="off">
                    {/* <h1>Authentication</h1><br/>
                    <input type="email" name="email" value={email} placeholder="Email" onChange={changeHandler}/><br /><br/>
                    <input type="password" name="password" value={password} placeholder="Password" onChange={changeHandler}/><br /><br/>
                    <button onClick={signIn}>Sign In</button> &nbsp;&nbsp;
                    <button onClick={signUp}>Sign Up</button> */}


                    {/* <h3 className='text-center'>Sign In</h3>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' value={email} placeholder="Enter Email" onChange={changeHandler} className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' value={password} placeholder='Enter Password' onChange={changeHandler} className='form-control'/>
                    </div><br/>
                    <div className='d-grid'>
                        <button className='btn btn-primary' onClick={signIn}>Sign In</button>
                    </div><br/>
                    <div className='d-grid'>
                        <button className='btn btn-primary' onClick={signUp}>Sign Up</button>
                    </div> */}

                </form>
            </center>
        </div>
    )
}

export default UserAuth