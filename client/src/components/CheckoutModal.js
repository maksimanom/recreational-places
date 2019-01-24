import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import Modal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/CheckoutModal.css';

export const CheckoutModal = (props) => (
  <Modal
    className="checkout-modal"
    isOpen={props.isOpen}
    onRequestClose={() => props.toggle('checkoutModalOpen')}
  >
    <div className="order">
      
      <p>
        <i>Перевірте правельність даних перед відправкою звітності.</i>
      </p>
      <table>
        <thead>
          <tr>
            <th>Автомобіль</th>
            <th>Ціна</th>
            <th>Загальний заробіток</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((item) => {
            return (
              <tr key={item.product.info.name} >
                <td>{item.product.info.name}</td>
                <td>{numeral(item.product.info.price).format('$0,0.00')}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p className="total">
        <b>Всього: </b>
        <span>{numeral(props.cart.reduce((acc, item) => acc += item.product.info.price * item.quantity, 0)).format('$0,0.00')}</span>
      </p>
      <div className="btns">
        <RaisedButton
          className="btn"
          label="Назад"
          primary={true}
          onClick={() => props.toggle('checkoutModalOpen')}
        />
        <RaisedButton
          className="btn"
          label="Підтвердити"
          backgroundColor="rgba(122, 122, 122, 0.445)"
          labelColor="#fff"
          onClick={props.makeOrder}
        />
      </div>
    </div>
  </Modal>
);

const mapStateToProps = (state) => ({
  cart: state.cart.items
});

export default connect(mapStateToProps)(CheckoutModal);