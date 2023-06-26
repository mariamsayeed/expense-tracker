import React ,{useContext}from 'react'
import { GlobalContext } from '../context/GlobalState'
const AmountButtons = () => {
    const{ setAmount } = useContext(GlobalContext);
  return (
    <div>
        <button className='btn-increase' onClick={()=>{setAmount(10)}}>10</button>
        <button className='btn-increase' onClick={()=>{setAmount(20)}}>20</button>
        <button className='btn-increase' onClick={()=>{setAmount(100)}}>100</button>
        <button className='btn-decrease' onClick={()=>{setAmount(-10)}}>-10</button>
        <button className='btn-decrease' onClick={()=>{setAmount(-20)}}>-20</button>
        <button className='btn-decrease' onClick={()=>{setAmount(-100)}}>-100</button>
    </div>
  )
}

export default AmountButtons