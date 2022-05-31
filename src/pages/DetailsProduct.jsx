import React from 'react';
import propTypes from 'prop-types';
import AddCartButton from '../components/AddCartButton';
import Rating from '../components/Rating';
import ShowRating from '../components/ShowRating';
import Header from '../components/Header';
import '../css/detailsProduct.css';

export default class DetailsProduct extends React.Component {
  state = {
    product: {
      title: '',
      price: 0,
      pictures: [],
      shipping: false,
      attributes: [],
    },
    comment: {
      email: '',
      messageRating: '',
      rating: 0,
      id: 0,
    },
    setImage: '',
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productInfo = await fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json());
    this.setState({
      product: productInfo,
      setImage: productInfo.pictures[0].url,
    });
  }

  handleChange = ({ target: { value, name } }) => {
    const { comment } = this.state;
    const newComment = comment;
    newComment[name] = value;
    this.setState({ comment: newComment });
  }

  rateProduct = (rate) => {
    const { comment } = this.state;
    const newComment = comment;
    newComment.rating = rate;
    this.setState({ comment: newComment });
  }

  generateID = () => {
    const id = Math.random();
    const { comment } = this.state;
    const newComment = comment;
    newComment.id = id;
    this.setState({ comment: newComment });
  }

  handleChangeImageButton = (url) => {
    this.setState({ setImage: url });
  }

  addComment = (comment) => {
    const newCommentList = JSON.parse(sessionStorage.getItem('commentList'));
    const clearComment = {
      email: '',
      messageRating: '',
      rating: 0,
      id: 0,
    };
    newCommentList.unshift(comment);
    sessionStorage.setItem('commentList', JSON.stringify(newCommentList));
    this.setState({ comment: clearComment });
  }

  update = () => {
    this.forceUpdate();
  }

  generateName(name, price) {
    return (
      <div className="name-box">
        <h2 className="name-container">
          <span data-testid="product-detail-name">{ name }</span>
          <span>{ ` - R$${price}` }</span>
        </h2>
      </div>
    );
  }

  readsQuantity() {
    if (sessionStorage.productsToBuy === undefined) {
      sessionStorage.setItem('productsToBuy', JSON.stringify([]));
    }
    const productsToBuy = JSON.parse(sessionStorage.getItem('productsToBuy'));
    return productsToBuy.length;
  }

  render() {
    const { product, comment } = this.state;
    if (sessionStorage.commentList === undefined) {
      sessionStorage.setItem('commentList', JSON.stringify([]));
    }
    const commentList = JSON.parse(sessionStorage.getItem('commentList'));
    const { title, price, pictures, shipping, attributes } = product;
    const { setImage } = this.state;
    const text = 'Adicionar ao carrinho.';
    const datatest = 'product-detail-add-to-cart';
    const picNum = 5;
    const picList = pictures.slice(0, picNum);
    return (
      <section className="details-page">
        <div className="header-container">
          <Header screen={ () => this.update } quantity={ this.readsQuantity() } />
        </div>
        <div className="header-page-ruler" />
        <main className="page-container">
          {this.generateName(title, price)}
          <div className="pŕoduct-details-hr" />
          <div className="product-illustration-container">
            <div className="main-thumb-container">
              <img
                src={ setImage }
                alt={ title }
                className="main-image-container"
              />
            </div>
            <div className="product-pictures">
              {
                picList.slice(0, picNum).map((picture) => {
                  const key = picture.id;
                  return (
                    <button
                      key={ key }
                      className="thumbnail-container"
                      type="button"
                      onClick={ () => this.handleChangeImageButton(picture.url) }
                    >
                      <img
                        src={ picture.url }
                        alt={ title }
                      />
                    </button>
                  );
                })
              }
            </div>
            <div className="product-details-btn-container">
              <AddCartButton
                datatest={ datatest }
                text={ text }
                product={ product }
                screen={ () => this.update() }
              />
            </div>
          </div>
          <div className="pŕoduct-details-hr" />
          <div className="product-attributes">
            <ul className="attribute-list">
              {
                shipping.free_shipping
                && (
                  <li>
                    <span data-testid="free-shipping">Frete Grátis</span>
                  </li>
                )
              }
              {
                attributes.map((attribute) => {
                  const key = attribute.id;
                  console.log(attribute.value_name);
                  if (attribute.value_name === null
                    || attribute.value_name === undefined
                    || attribute.value_name.toLowerCase().includes('described')
                    || attribute.value_name.toLowerCase().includes('undefined')) {
                    return null;
                  }
                  return (
                    <li key={ key } className="attrList-item">
                      {
                        `${attribute.name}: ${attribute.value_name}`
                      }
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </main>
        <section className="comment-section">
          <div className="create-a-comment-section">
            <Rating
              addComment={ this.addComment }
              handleChange={ this.handleChange }
              rateProduct={ this.rateProduct }
              generateID={ this.generateID }
              comment={ comment }
            />
          </div>
          <div className="pŕoduct-details-hr" />
          <div className="comment-list">
            <h2 className="comment-title">Comentários</h2>
            {
              commentList.map((commentIndex) => {
                const key = commentIndex.id;
                return (
                  <ShowRating
                    key={ key }
                    email={ commentIndex.email }
                    comment={ commentIndex.messageRating }
                    starPosition={ commentIndex.rating }
                  />
                );
              })
            }
          </div>
        </section>
      </section>
    );
  }
}

DetailsProduct.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
