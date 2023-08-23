import React from "react"
import { connect } from "react-redux"
import { buyIce } from "../redux/index"

function IceContainer(props) {
  return (
    <div>
      <h2>Number Of Ice - {props.numOfIce}</h2>
      <button onClick={props.buyIce}>Buy Ice</button>
    </div> 
  )
}

const mapStateToProps = state => {  
     return{
          numOfIce:state.ice.numOfIce
     }
}

const mapDispatchToProps = dispatch => {
     return {
          buyIce:() => dispatch(buyIce())
     }
}


export default connect(
     mapStateToProps,
     mapDispatchToProps)
     (IceContainer)
