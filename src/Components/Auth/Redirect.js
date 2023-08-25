import React from 'react'
// import {auth} from './firebase';
import Navbar from '../Products/Navbar';
import Products from '../Products/Products';

const Direct = ({presentUser}) => {
    return (
        <div>
           <h1> Welcome to {presentUser.email}</h1>
           <Navbar/>
           <Products/>
           {/* <button onClick={() => auth.signOut()}>Sign Out</button> */}
        </div>
    )
}

export default Direct