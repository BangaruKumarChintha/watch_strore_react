import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../Auth/firebase';

const Signup = () => {

    const [data,setData] = useState({
        email:"",
        password:"",
        name:""
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

  return (
    <div className='signup d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
        <div className='form_container p-5 rounded bg-white'>
            <form>
                <h3 className='text-center'>Sign Up</h3>
                <div className='mb-2'>
                    <label htmlFor='fname'>First Name</label>
                    <input type='text' name='fname' placeholder='Enter First Name' onChange={changeHandler} className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' name='lname' placeholder='Enter Last Name' onChange={changeHandler} className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' value={email} placeholder='Enter Email' onChange={changeHandler} className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={password} placeholder='Enter Password' onChange={changeHandler} className='form-control'/>
                </div>
                <div className='d-grid'>
                    <button className='btn btn-primary' onClick={signUp}>Sign Up</button>
                </div>
                <p className='text-end mt-2'>
                    Already Registered <Link to='/' className='ms-3'>Sign in</Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Signup
