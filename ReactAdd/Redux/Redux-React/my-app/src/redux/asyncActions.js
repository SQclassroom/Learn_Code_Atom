//npm install axios redux-thunk

const redux = require ('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios  = require('axios')





const store = createStore(reduser , applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())
