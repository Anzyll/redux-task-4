import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { buyIcecream } from './Redux'

const HooksBuyIcecream = () => {
    const icecreamCount=useSelector((state)=>state.icecream.icecreamCount)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>No of icecream - {icecreamCount}</h1>
      <button onClick={()=>dispatch(buyIcecream())}>buy icecream</button>
    </div>
  )
}
export default HooksBuyIcecream