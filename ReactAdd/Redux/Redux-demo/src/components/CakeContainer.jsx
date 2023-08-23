import { connect } from "react-redux"
import { buyCake } from "../redux"

function CakeContainer() {
  return (
    <div>
      <h2>Number Of Cake -</h2>
      <button>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {  
     return{
          numOfCakes:state.numOfCakes
     }
}

const mapDispatchToProps = dispatch => {
     return {
          buyCake:() => dispatch(buyCake())
     }
}


export default connect(
     mapStateToProps,
     mapDispatchToProps)
     (CakeContainer)
