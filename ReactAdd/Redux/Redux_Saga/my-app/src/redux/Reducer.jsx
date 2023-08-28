import {ADD_TO_CART}  from "./constant"

const cartData = (data=[] , action) => {
     if(action.type === ADD_TO_CART)
     {
          console.log("Reducer Called" , action)
          return action.data
     }
     else{
          return "no action matched"
     }
}

export default cartData
