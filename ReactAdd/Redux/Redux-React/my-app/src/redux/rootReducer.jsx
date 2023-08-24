import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceReducer from './iceCream/iceReducer'
import UserReduser from '../components/UserReducer'

const rootReducer  = combineReducers({
     cake : cakeReducer,
     ice : iceReducer,
     user : UserReduser
})

export default rootReducer