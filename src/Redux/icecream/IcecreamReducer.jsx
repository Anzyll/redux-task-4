import React from 'react'
import { BUY_ICECREAM } from './IcecreamType'

const initialState = {
    icecreamCount : 50
}
const IcecreamReducer = (state=initialState,action) => {
  switch(action.type){
    case BUY_ICECREAM:
        return{
            ...state,
            icecreamCount:state.icecreamCount - action.payload
        }
    default:
        return state;
  }
}

export default IcecreamReducer
