// npm install redux-logger

const redux = require('redux')
const reduxLogger  = require('redux-logger')   

const createStore = redux.createStore
const combineReducers = redux.combineReducers 
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

// const combineRedusers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE';
const BUY_CHOCO = 'BUY_CHOCO';

function buyCake(){
     return{
          type:BUY_CAKE,
          info:'first redux action'
     } 
}
function buyChoco(){
     return{
          type:BUY_CHOCO,
          info:'first redux action'
     } 
}


// const initialState ={
//      numOfCakes:10,
//      numOfChoco:20
// }

const initialCakeState = {
     numOfCakes:10
} 

const initialChocoState = {
     numOfChoco:20
} 

 
// const reducer = (state = initialState , action) => {
//      switch(action.type){
//           case BUY_CAKE:return{
//                ...state,
//                numOfCakes:state.numOfCakes-1
//           }
//           case BUY_CHOCO:return{
//                ...state,
//                numOfChoco:state.numOfChoco-1
//           }

//           default:return state
//      } 
// }

const cakereducer = (state = initialCakeState , action) => {
     switch(action.type){
          case BUY_CAKE:return{
               ...state,
               numOfCakes:state.numOfCakes-1
          }

          default:return state
     } 
}


const chocoreducer = (state = initialChocoState , action) => {
     switch(action.type){
          case BUY_CHOCO:return{
               ...state,
               numOfChoco:state.numOfChoco-1
          }

          default:return state
     } 
}

const rootReduser = combineReducers({
     cake:cakereducer,
     choco:chocoreducer
})
const store = createStore(rootReduser , applyMiddleware(logger))
console.log('Initial state' , store.getState());
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())  
store.dispatch(buyCake())
store.dispatch(buyChoco())
store.dispatch(buyChoco())
unsubscribe()