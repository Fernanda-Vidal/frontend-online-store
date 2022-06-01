import React from 'react';
import '../css/cartCheckout.css';
// import propTypes from 'prop-types';
import Visa from '../image/Visa.png';
import Master from '../image/Master.png';
import Amex from '../image/Amex.png';
import Boleto from '../image/Boleto.png';
import Pix from '../image/Pix.png';

class FormRadio extends React.Component {
  render() {
    // const { value, img } = this.props;
    return (
      <div>
        <div>
          <form className="formsPayment">
            <label className="labelRadio" htmlFor="boleto">
              <input className="boleto" type="radio" value="boleto" name="pagamento" />
              <img className="imgPayment" src={ Boleto } alt="boleto" />
            </label>
            <br />
            <label className="labelRadio" htmlFor="pix">
              <input className="pix" type="radio" value="pix" name="pagamento" />
              <img className="imgPayment" src={ Pix } alt="pix" />
            </label>
            <br />
            <label className="labelRadio" htmlFor="visa">
              <input className="visa" type="radio" value="visa" name="pagamento" />
              <img className="imgPayment" src={ Visa } alt="visa" />
            </label>
            <br />
            <label className="labelRadio" htmlFor="masterCart">
              <input className="masterCart" type="radio" value="masterCart" name="pagamento" />
              <img className="imgPayment" src={ Master } alt="masterCart" />
            </label>
            <br />
            <label className="labelRadio" htmlFor="amex">
              <input className="amex" type="radio" value="amex" name="pagamento" />
              <img className="imgPayment" src={ Amex } alt="amex" />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

// FormRadio.propTypes = {
//   value: propTypes.string.isRequired,
//   img: propTypes.string.isRequired,
// };

export default FormRadio;
