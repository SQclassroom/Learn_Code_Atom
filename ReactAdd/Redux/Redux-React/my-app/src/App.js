import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer.jsx'
import HooksContainer from './components/HooksContainer'
import IceContainer from './components/IceContainer'

function App() {

  return (
    <>
      <Provider store={store}>
        <CakeContainer/>
        <HooksContainer/>
        <IceContainer/>
      </Provider>
    </>
  )
}

export default App
