import React from 'react';
import Header from './Header';
import '../css/cartCheckout.css';
// import Visa from '../image/Visa.png';
// import Master from '../image/Master.png';
// import Amex from '../image/Amex.png';
// import Boleto from '../image/Boleto.png';
// import Pix from '../image/Pix.png';
import FormInputText from './FormInputText';
import FormRadio from './FormRadio';

class CartCheckout extends React.Component {
  readsQuantity() {
    if (sessionStorage.productsToBuy === undefined) {
      sessionStorage.setItem('productsToBuy', JSON.stringify([]));
    }
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    return productsToBuy.length;
  }

  render() {
    return (
      <div>
        <div className="header-container">
          <Header quantity={ this.readsQuantity() } />
        </div>
        <form>
          <div className="header-page-ruler" />
          <div className="formsCheckout">
            <div className="formsData">
              <FormInputText
                type="text"
                data="checkout-fullname"
                name="name"
                text="Nome Completo"
              />
              <br />
              <FormInputText
                type="email"
                data="checkout-email"
                name="email"
                text="E-mail"
              />
              <br />
              <FormInputText type="text" data="checkout-cpf" name="cpf" text="CPF" />
              <br />
              <FormInputText
                type="text"
                data="checkout-phone"
                name="phone"
                text="Telefone:"
              />
              <br />
              <FormInputText type="text" data="checkout-cep" name="cep" text="CEP:" />
              <br />
              <FormInputText
                type="text"
                data="checkout-address"
                name="address"
                text="Endereço:"
              />
            </div>
            <div className="formsPayment">
              <FormRadio />
            </div>
          </div>
          <div className="divButtonForms">
            <button className="buttonCheckout" type="submit">Comprar</button>
          </div>
        </form>
      </div>
    );
  }
}
export default CartCheckout;
