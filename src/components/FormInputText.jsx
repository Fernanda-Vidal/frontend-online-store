import React from 'react';
import '../css/cartCheckout.css';
import propTypes from 'prop-types';

class FormInputText extends React.Component {
  render() {
    const { type, data, name, text } = this.props;
    return (
      <div>
        <form>
          <label htmlFor={ name }>
            { text }
            <input
              type={ type }
              className="inputForms"
              data-testid={ data }
              name={ name }
            />
          </label>
        </form>
      </div>
    );
  }
}

FormInputText.propTypes = {
  type: propTypes.string.isRequired,
  data: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default FormInputText;
