import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('Login');

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3655/3655682.png"
            alt="Logo"
            className="logo"
          />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? '✅' : '⛔'}</li>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="links">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="links">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="links">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="links">Cart</Link>
          </li>
          <button
            className="loginBtn"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
