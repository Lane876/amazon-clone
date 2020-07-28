import React, { useContext } from 'react'
import { StateContext, getTotal } from '../StateProvider'

const Subtotal = () => {
    const[{basket}, dispatch]= useContext(StateContext)
    return (
        <div className='subtotal'>
            <p>Subtotal ({basket.length} items) : <strong>{`$ ${getTotal(basket)}`}</strong> </p>
            <button>Proceed to checkout</button>
            
        </div>
    )
}

export default Subtotal
