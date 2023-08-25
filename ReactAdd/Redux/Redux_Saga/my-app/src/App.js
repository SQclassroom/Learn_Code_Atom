import './App.css';
import { addToCart } from './redux/Actions'
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const product = {
    name : "iphone",
    type : "Mobile",
    price : 20000,
    color : "red"
  }
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>addToCart</button>
    </div>
  );
}

export default App;
