import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import numeral from 'numeral';
import { getCart } from '../actions/cartActions';
import CheckoutModal from './CheckoutModal';
import OrderSuccessModal from './OrderSuccessModal';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import RemoveShoppingCart from 'material-ui/svg-icons/action/remove-shopping-cart.js';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';
import '../styles/Cart.css';

export class Cart extends React.Component {
  state = {
    checkoutModalOpen: false,
    orderSuccessModalOpen: false,
    dialogOpen: false,
    snackbarOpen: false
  }

  toggleOpen = (targetComponent) => {
    this.setState({ [targetComponent]: !this.state[targetComponent] });
  }

  removeItem = (itemId) => {
    axios.put('/api/cart', {
        cartId: this.props.cart._id,
        itemId: itemId
      })
      .then(() => {
        this.props.getCart();
        this.toggleOpen('snackbarOpen');
        setTimeout(() => {
          this.toggleOpen('snackbarOpen');
        }, 4000);
      });
  }

  emptyCart = () => {
    axios.delete('/api/cart', { params: { id: this.props.cart._id } })
      .then(() => {
        this.setState({ dialogOpen: false });
        this.props.getCart();
      });
  }

  makeOrder = () => {
    const order = this.props.cart.items.map((item) => {
      let order = {
        name: item.product.info.name,
        price: item.product.info.price,
        dateCreated: Date.now()
      };
      return order;
    });

    axios.post('/api/order', { order: order })
      .then(() => {
        this.toggleOpen('checkoutModalOpen');
        this.toggleOpen('orderSuccessModalOpen');
        this.emptyCart();
      });
  }

  componentDidMount() {
    this.props.getCart();
  }

  render() {
    return (
      <div className="cart-container">
        <h1>Закладинки</h1>
        <div className="cart">
          <div className="cart-info">
            <CheckoutModal
              isOpen={this.state.checkoutModalOpen}
              onRequestClose={this.toggleOpen}
              toggle={this.toggleOpen}
              makeOrder={this.makeOrder}           
            />
            <OrderSuccessModal
              isOpen={this.state.orderSuccessModalOpen}
              onRequestClose={this.toggleOpen}
              toggle={this.toggleOpen}
            />
            <Dialog
              title="Are you sure that you want to empty your cart?"
              actions={[
                <FlatButton
                  label="Cancel"
                  primary={true}
                  onClick={() => this.toggleOpen('dialogOpen')}
                />,
                <FlatButton
                  label="Yes"
                  primary={true}
                  onClick={this.emptyCart}
                />,
              ]}
              modal={true}
              open={this.state.dialogOpen}
            >
              Всі заладинки видалено.
            </Dialog>
          </div>
          <div className="cart-items">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Заклад</th>
                  <th>Середня ціна харчування</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.props.cart.items.length ? this.props.cart.items.map((item) => {
                  return (
                    <tr key={item.product.info.name} >
                      <td><img src={item.product.info.photo} /></td>
                      <td><Link to={`/product/${item.product._id}`}>{item.product.info.name}</Link></td>
                      <td>{numeral(item.product.info.price).format('$0,0.00')}</td>
                      <td><button title="Видалити" onClick={() => this.removeItem(item._id)}>X</button></td>
                    </tr>
                  );
                }) : ''}
              </tbody>
            </table>
            {!this.props.cart.items.length && <h1>Не додано жодного закладу.</h1>}
            <Snackbar
              open={this.state.snackbarOpen}
              message="Закладинку видалено."
              bodyStyle={{ 'textAlign': 'center' }}
            />
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
  getCart: () => dispatch(getCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);