import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delCart } from '@/action'

export default function Cart() {
    const state = useSelector((state)=>state.handleCart)
    const dispatch = useDispatch()

    const handleClose =(item)=>{
        dispatch(delCart(item));
    }

    let total= 0;

    const cartItems = (cartItem) =>{
        return(
            <div className="mx-4 px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4 px-4">
                    <button onClick={()=>handleClose(cartItem)}
                    className="float-end my-4 buttons"> <i className='fa fa-trash py-4'></i></button>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img src={cartItem.Images[0]} alt={cartItem.Title} height="150px" width="150px" borderRadius="10px" />
                            </div>
                            <div className="col-md-4 py-4">
                                <h3>{cartItem.Title}</h3>
                                <p className='lead fw-bold'>{cartItem.Genre}</p>
                            </div>
                        </div>
                </div>
                <style jsx>
                  {`
                    .buttons{
                      border: 1px solid white;
                    }
                  `}
                </style>
            </div>
        )
    }

const emptyCart =()=>{
    return(
        <div className="px-4 my-5 bg-light rounded-3 py-5" >
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
                </div>
    )
}

  return (
    <>
    {state.length === 0 && emptyCart()}
    {state.length !== 0 && state.map(cartItems)}
    
   
    </>
  )
}
