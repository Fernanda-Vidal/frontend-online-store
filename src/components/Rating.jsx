import React from 'react';
import propTypes from 'prop-types';
import RatingStars from './RatingStars';
import '../css/rating.css';

class Rating extends React.Component {
  render() {
    const { comment } = this.props;
    const { email, messageRating, rating } = comment;
    const { addComment } = this.props;
    const { handleChange, rateProduct, generateID } = this.props;
    return (
      <form className="outter-comment-container">
        <div className="email-container">
          <input
            type="email"
            data-testid="product-detail-email"
            placeholder="Email"
            value={ email }
            name="email"
            onChange={ handleChange }
            required
          />
          <div className="star-container">
            <RatingStars rateProduct={ rateProduct } position={ rating } />
          </div>
        </div>
        <div className="comment-button-add-container">
          <button
            data-testid="submit-review-btn"
            type="button"
            onClick={ () => {
              generateID();
              addComment(comment);
            } }
          >
            Avaliar
          </button>
        </div>
        <div className="comment-text-area-container">
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Mensagem(opcional)"
            value={ messageRating }
            name="messageRating"
            onChange={ handleChange }
            className="comment-text-area"
          />
        </div>
      </form>
    );
  }
}

Rating.propTypes = {
  addComment: propTypes.func.isRequired,
  handleChange: propTypes.func.isRequired,
  rateProduct: propTypes.func.isRequired,
  generateID: propTypes.func.isRequired,
  comment: propTypes.shape({
    email: propTypes.string.isRequired,
    messageRating: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    id: propTypes.number.isRequired,
  }).isRequired,
};

export default Rating;
