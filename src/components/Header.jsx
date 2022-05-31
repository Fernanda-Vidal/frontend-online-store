import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Carrinho from '../image/Carrinho.png';
import ToShoppingCartButton from './ToShoppingCartButton';
import '../css/header.css';

class Header extends React.Component {
  render() {
    const { screen, quantity } = this.props;
    return (
      <header className="header">
        <div className="title">
          <Link className="link" to="/">
            <span>DarkMarket</span>
          </Link>
        </div>
        <nav>
          <Link to="/ShoppingCart">
            <div className="divQuantity">
              <img src={ Carrinho } alt="carrinho" />
              <ToShoppingCartButton
                quantity={ quantity }
                screen={ () => screen }
              />
            </div>
          </Link>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  quantity: propTypes.number.isRequired,
  screen: propTypes.func.isRequired,
};

export default Header;
