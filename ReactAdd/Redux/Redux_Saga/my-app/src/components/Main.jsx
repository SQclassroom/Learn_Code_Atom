import { addToCart } from '../redux/Actions'
import { removeToCart } from '../redux/Actions';
import { emptyCart } from '../redux/Actions';
import { productList } from '../redux/Product/ProductActions';
import { useDispatch } from 'react-redux';
import Header from './Header';
import { useSelector } from 'react-redux';

function Main() {

     const data = useSelector(state => state)
     console.log("Main Component" , data);
  const dispatch = useDispatch();
  const product = {
    name : "iphone",
    type : "Mobile",
    price : 20000,
    color : "red"
  }
  return (
    <div className="App">
      <Header/>
      <button onClick={() => dispatch(addToCart(product))}>addToCart</button>
      <button onClick={() => dispatch(removeToCart(product))}>removeToCart</button>
      <button onClick={() => dispatch(emptyCart(product))}>emptyToCart</button>
      <button onClick={() => dispatch(productList(product))}>Get Product List</button>
    </div>
  );
}

export default Main;
