import React from 'react';
import propTypes from 'prop-types';
import '../css/shoppingCart.css';

export default class CardProductsToBuy extends React.Component {
  state = {
    productList: [],
  }

  componentDidMount() {
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    const cartproducts = productsToBuy.map((product) => product.id)
      .reduce((acc, product) => {
        if (acc[product] === undefined) {
          acc[product] = 1;
        } else {
          acc[product] += 1;
        }
        return acc;
      }, {});
    this.setState({ productList: Object.entries(cartproducts) });
  }

  removeAddProduct = (id, num, products) => {
    if (num < 0) {
      for (let i = 0; i < products.length; i += 1) {
        if (products[i].id === id) {
          products[i] = undefined;
          break;
        }
      }
      sessionStorage.setItem('productsToBuy', JSON
        .stringify(products.filter((prod) => prod !== undefined)));
    } else {
      const chosenProduct = products.find((product) => product.id === id);
      products.push(chosenProduct);
      sessionStorage.setItem('productsToBuy', JSON.stringify(products));
    }
  }

  productChangeQuantity=(id, num) => {
    const { productList } = this.state;
    const { screen } = this.props;
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    const quantity = productsToBuy.find((item) => item.id === id).available_quantity;
    const amountProducts = productList.map((item) => {
      if (item[0] === id) {
        if (num > 0 && item[1] < quantity) {
          item[1] += num;
          this.removeAddProduct(id, num, productsToBuy);
          return item;
        }
        if (item[1] > 1 && num < 0) {
          item[1] += num;
          this.removeAddProduct(id, num, productsToBuy);
          return item;
        }
      }
      return item;
    }).filter((item) => item !== undefined);
    this.setState({ productList: amountProducts });
    screen();
  }

  removeProduct=(id) => {
    const { productList } = this.state;
    const { screen } = this.props;
    const amountProducts = productList.map((item) => {
      if (item[0] === id) {
        return undefined;
      }
      return item;
    }).filter((item) => item !== undefined);
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    const newList = productsToBuy.map((product) => {
      if (product.id === id) {
        return undefined;
      }
      return product;
    }).filter((item) => item !== undefined);
    sessionStorage.setItem('productsToBuy', JSON.stringify(newList));
    this.setState({ productList: amountProducts });
    screen();
  }

  render() {
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    const { productList } = this.state;
    const num = -1;
    return (
      <div>
        {
          productList.map((productId) => {
            const key = productId[0];
            const product = productsToBuy.find((item) => item.id === key);
            return (
              <div key={ key }>
                <div>
                  <h2 data-testid="shopping-cart-product-name">{ product.title }</h2>
                </div>
                <div>
                  <div className="image-cart-container">
                    <img
                      src={ product.thumbnail }
                      alt=""
                      className="image-cart"
                    />
                  </div>
                </div>
                <div className="price">
                  {/* <p>R$</p> */}
                  <p>
                    R$
                    { product.price }

                  </p>
                  <div>
                    <button
                      type="button"
                      className="button-cart"
                      data-testid="product-decrease-quantity"
                      onClick={ () => this.productChangeQuantity(key, num) }
                    >
                      -
                    </button>
                    <span
                      data-testid="shopping-cart-product-quantity"
                      className="qtd"
                    >
                      { productId[1] }
                    </span>
                    <button
                      type="button"
                      className="button-cart"
                      data-testid="product-increase-quantity"
                      onClick={ () => this.productChangeQuantity(key, 1) }
                      value={ key }
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="button-cart"
                      onClick={ () => this.removeProduct(key) }
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

CardProductsToBuy.propTypes = {
  screen: propTypes.func.isRequired,
};
