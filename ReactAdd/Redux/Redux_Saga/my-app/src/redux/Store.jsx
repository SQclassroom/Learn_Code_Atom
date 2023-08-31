import {configureStore} from '@reduxjs/toolkit'
import rootReducer from "./rootReducer";
import ProductSaga from './Product/ProductSaga';
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware();

const store =configureStore(
     {
          reducer:rootReducer,
          middleware:() => [sagaMiddleware]
     }
     );
     sagaMiddleware.run(ProductSaga)
export default store