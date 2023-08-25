import React from 'react'
import {useSelector } from 'react-redux';
import {auth} from '../Auth/firebase';

const Navbar = () => {
    const cartCount = useSelector((state)=>state.CartRed.cartValues.length)
    const totalPrice = useSelector((state)=>state.CartRed.totalPrice)
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='d-inline p-2 navbar-nav mx-auto'>
            <span className='btn btn-primary'>Cart Items:{cartCount}</span> &nbsp; &nbsp;
            <span className='btn btn-primary'>Total Price:{totalPrice}</span> &nbsp; &nbsp;
            <button className='btn btn-primary' onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
