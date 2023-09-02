// import { Route , Routes } from 'react-router-dom';  
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Cart() {

  const cartData = useSelector((state) => state.cartData)
  let amount = cartData.length && cartData.map(item => item.price).reduce((pre , next) => pre+next) 

  return (
    <div className="App">
      <Link to="/">ProductList</Link>
      <h1>Cart Page</h1>
      <div className="cartPage">
        <table className="item-table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Color</td>
              <td>Price</td>
              <td>Brand</td>
              <td>Category</td>
              <td>Image</td>
            </tr>
          </thead>
          <tbody>
          {
            cartData.map((item) =>
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td><img src={item.image} alt="" style={{ height: 100 }} /></td>
              </tr>
            )
          }
          </tbody>
        </table>
        <div>
          <div className="price-details">
            <div><span>Amount</span><span>{amount}</span></div>
            <div><span>Discount</span><span>{(amount/10)}</span></div>
            <div><span>Tax</span><span>{(amount/18)}</span></div>
            <div><span>Total</span><span>{(amount+amount/18-amount/10)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
