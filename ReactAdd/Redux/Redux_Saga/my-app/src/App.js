import './App.css';
import Main from './components/Main';
import Header from './components/Header'
import { Route , Routes } from 'react-router-dom';
import Cart from './redux/Cart';


function App() {

  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
