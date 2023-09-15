import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import './main.css'

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  useEffect(() => {
    dispatch(productList())
  }, [dispatch])

  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
        <button onClick={() => dispatch(productList())}>Call Product List</button>
      </div>
      <div className='product-container'>
        {
          data.map((item) =>
            <div key={item.id} className='product-item'>
              <img src={item.image} alt="" className='image-product' />
              <div>Name : {item.title} </div>
              <div>Color : {item.description} </div>
              <div>Price : {item.price}Rs </div>
              <div>Category : {item.category} </div>
              <div>Brand : {item.brand} </div>
              <div>
                <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
                <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>
              </div>
            </div>)
        }
      </div>
    </div>
  );
}

export default Main;
