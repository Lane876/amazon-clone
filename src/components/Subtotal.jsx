import React, { useContext } from 'react'
import { StateContext, getTotal } from '../StateProvider'
import CurrencyFormat from 'react-currency-format'

const Subtotal = () => {
    const[{basket}, dispatch]= useContext(StateContext)
    return (
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>
                        {`$ ${getTotal(basket)} `}
                    </strong>
                </p>
                <small className='subtotalGift'>
                    <input type="checkbox"/> This order contains gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getTotal(basket)}
            displayType='text'
            thousandSeparator={true}
            prefix={"$"}
            />
            <button>Proceed to checkout</button>
            
        </div>
    )
}

export default Subtotal
