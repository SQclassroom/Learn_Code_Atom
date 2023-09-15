import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Header = () => {
    const result = useSelector((state) => state.cartData);
    console.warn("data in header", result);
    return (
        <div className="header">
            <Link to="/">
                <h1 className='logo'>E-comm</h1>
            </Link>
            <Link to="/">
                <div className='search-box'>
                    <input type="text" placeholder='search product' />
                </div>
                <div className="cart-div">
                    <span className='length'>{result.length}</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" style={{ height:30}} />
                </div>
            </Link>
        </div>
    )
}

export default Header;