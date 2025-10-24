import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { buyCake } from './Redux'

const HooksBuyCake = () => {
    const cakeCount=useSelector((state)=>state.cakeCount)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>No of cakes - {cakeCount}</h1>
      <button onClick={()=>dispatch(buyCake())}>buy cake</button>
    </div>
  )
}
export default HooksBuyCake
