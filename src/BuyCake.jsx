import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './Redux'
const BuyCake = (props) => {
  return (
    <div>
      <h1>No of Cakes : {props.cakeCount}</h1>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return{
        cakeCount:state.cakeCount
    }
}
const mapDispatchToProps = (dispatch) => ({
  buyCake: () => dispatch(buyCake())
})
export default connect(mapStateToProps,mapDispatchToProps)(BuyCake)


