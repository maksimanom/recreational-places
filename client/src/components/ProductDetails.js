import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import numeral from 'numeral';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import '../styles/ProductDetails.css';

export class ProductDetails extends React.Component {
  state = {
    postData: {
      user: this.props.loggedUser._id,
      product: this.props.product._id,
      quantity: 1
    },
    snackbarOpen: false
  }

  onQuantityChange = (e) => {
    let value = e.target.value;
    this.setState((prevState) => ({
      postData: { ...prevState.postData, quantity: value*1 }
    }));
  }

  addToCart = () => {
    axios.post('/api/cart', this.state.postData);
    this.setState({ snackbarOpen: true });
  }

  render() {
    return (
      <div className="product-details-container">
        <h1>{this.props.product.info.name}</h1>
        <div className="product-details">
          <div className="product-image">
            <img src={this.props.product.info.photo} />
          </div>
          <div className="product-info">
            <table>
              <tr>
                <th>Назва</th>
                <td>{this.props.product.info.name}</td>
              </tr>
              <tr>
                <th>Адреса</th>
                <td>{this.props.product.info.dimensions}</td>
              </tr>
              <tr>
                <th>Час роботи</th>
                <td>{this.props.product.info.weight}</td>
              </tr>
              <tr>
                <th>Спеціалізація</th>
                <td>{this.props.product.info.problem}</td>
              </tr>
              
            </table>
            <Snackbar
              open={this.state.snackbarOpen}
              message={this.props.loggedUser ? 'Додано.' : 'Ви повинні бути зареєсттровані!'}
              autoHideDuration={4000}
              bodyStyle={this.props.loggedUser ? { 'background': '#64DD17' } : { 'background': '#F44336' }}
            />
          </div>
        </div>
        <div className="product-handle">
          <div className="left">
            <RaisedButton
              containerElement={<Link to="/" />}
              className="btn"
              label="Назад"
              labelPosition="after"
              secondary={true}
              icon={<KeyboardArrowLeft />}
            />
          </div>
          <div className="right">
            <div className="price">
              <span className="price-text">Ціна: </span>
              <span className="price-num">{numeral(this.props.product.info.price).format('$0,0.00')}</span>
            </div>
            <div className="btn">
              <RaisedButton
                onClick={this.addToCart}
                label="Додати"
                labelPosition="before"
                primary={true}
                icon={<AddShoppingCart />}
              />
            </div>
           </div> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  loggedUser: state.loggedUser,
  product: state.catalog.items.find((item) => item._id == props.match.params.id)
});

export default connect(mapStateToProps)(ProductDetails);