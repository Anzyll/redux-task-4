import { BUY_CAKE } from "./caketypes"

const initialState = {
    cakeCount:10
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
             console.log("BUY_CAKE action received", state.cakeCount);
            return{
                ...state,
                cakeCount:state.cakeCount-1
            }
        default:
            return state
    }
}
export default reducer;