// npm install redux react-redux 

import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer.jsx'

function App() {

  return (
    <>
      <Provider store={store}>
      </Provider>
      <CakeContainer/>
    </>
  )
}

export default App
