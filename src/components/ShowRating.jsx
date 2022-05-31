import React from 'react';
import propTypes from 'prop-types';
import RatingStarRender from './RatingStarRender';

class ShowRating extends React.Component {
  render() {
    const { email, starPosition, comment } = this.props;
    return (
      <div className="outter-comment-container">
        <div className="info-comment-container">
          <span className="info-comment-email">{ email }</span>
          <div className="info-comment-stars">
            <RatingStarRender starPosition={ starPosition } />
          </div>
        </div>
        <div className="info-comment-text">
          <p>{ comment }</p>
        </div>
      </div>
    );
  }
}

ShowRating.propTypes = {
  email: propTypes.string.isRequired,
  starPosition: propTypes.string.isRequired,
  comment: propTypes.string.isRequired,
};

export default ShowRating;
