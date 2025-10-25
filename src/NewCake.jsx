import React, { useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { buyIcecream } from './Redux'

const NewBuyIcecream = () => {
    const [number,setNumber]=useState(1)
    const icecreamCount=useSelector((state)=>state.icecream.icecreamCount)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>No of icecream - {icecreamCount}</h1>
      <input type="text" value={number} onChange={(e)=>setNumber(Number(e.target.value))} />
      <button onClick={()=>dispatch(buyIcecream(number))}>buy icecream</button>
    </div>
  )
}
export default NewBuyIcecream