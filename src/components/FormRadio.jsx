import React from 'react';
import propTypes from 'prop-types';

class FormRadio extends React.Component {
  render() {
    const { value, img } = this.props;
    return (
      <div>
        <form>
          <label htmlFor={ value }>
            <input className={ value } type="radio" value={ value } name="pagamento" />
            <img className="imgPayment" src={ img } alt={ value } />
          </label>
        </form>
      </div>
    );
  }
}

FormRadio.propTypes = {
  value: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
};

export default FormRadio;
