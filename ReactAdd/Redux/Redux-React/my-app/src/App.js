import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
// import CakeContainer from './components/CakeContainer.jsx'
// import HooksContainer from './components/HooksContainer'
// import IceContainer from './components/IceContainer'
import UserContainer from './components/UserContainer'

function App() {

  return (
    <>
      <Provider store={store}>
        <UserContainer/>
      </Provider>
    </>
  )
}

export default App
