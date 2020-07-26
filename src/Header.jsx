import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_search_input" />
        <SearchIcon className="header_serach_icon" />
      </div>
      <div className="header_nav">
          <Link to='/login' className='header_link'>
              <div className="header_options">
                  <span className='header_otion_one'>MMM</span>
                  <span className='header_otion_two'>Sign in</span>
              </div>
          </Link>
          <Link to='/' className='header_link'>
              <div className="header_options">
                  <span className='header_otion_one'>Returns</span>
                  <span className='header_otion_two'>& Orders</span>
              </div>
          </Link>
          <Link to='/' className='header_link'>
              <div className="header_options">
                  <span className='header_otion_one'>Your</span>
                  <span className='header_otion_two'>Prime</span>
              </div>
          </Link>
          <Link to='/checkout' className='header_link'>
              <div className="header_option_basket">
                <ShoppingBasketIcon/>
                <span className='header_otion_two basket_count'>0</span>
              </div>
          </Link>
          
      </div>
    </nav>
  );
};

export default Header;
