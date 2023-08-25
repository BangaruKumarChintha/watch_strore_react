import React from 'react'
import JsonData from '../Data/JsonData.json';
import { useDispatch } from 'react-redux';
import {incrementcart, decrementcart} from '../Redux/Reducer/CartReducer';

const Products = () => {
    const dispatch = useDispatch();
  return (
    <div>
      <div className='container'>
        <div className='row'>
            {
                JsonData.products.map(product=>
                    <div className='col mt-3 mb-5' key={product.id}>
                        <div className='card mt-3 pt-3 text-center' style={{"width":"250px", "height":"500px"}}>
                            <img className='card-img-top mx-auto' src={product.src} style={{"width":"220px", "height":"300px"}}/>
                            <p className='card-title'>{product.name} | <span className='fw-bolder'> ₹ {product.price} </span></p>

                            <div className='cardbody'>
                                <button className='btn btn-success ml-auto' onClick={()=>dispatch(incrementcart({
                                    productName: product.name,
                                    productPrice: product.price
                                }))} >Add</button> &nbsp;
                                <button className='btn btn-danger ml-auto' onClick={()=>dispatch(decrementcart({
                                    productName: product.name,
                                    productPrice: product.price
                                }))} >Remove</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
      </div>
    </div>
  )
}

export default Products