import { useSelector , useDispatch } from "react-redux/es/hooks/useSelector"
import { buyCake } from "../redux"

const HooksContainer = () => {

     const numOfCakes = useSelector(state => state.numOfCakes)
     const dispatch = useDispatch()

  return (
    <div>
      <h2>Num of Cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  ) 
}

export default HooksContainer
