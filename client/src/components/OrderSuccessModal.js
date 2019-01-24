import React from 'react';
import Modal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/OrderSuccessModal.css';

const OrderSuccessModal = (props) => (
  <Modal
    className="order-success-modal"
    isOpen={props.isOpen}
    onRequestClose={() => props.toggle('orderSuccessModalOpen')}
  >
    <div className="success">
      <h1>Успішно!</h1>
      <img src="/img/success.gif" />
      <br/>
      <p>
        Звіт про виконану роботу відправлено!
      </p>
      <RaisedButton
        onClick={() => props.toggle('orderSuccessModalOpen')}
        className="btn"
        label="OK"
        primary={true}
      />
    </div>
  </Modal>
);

export default OrderSuccessModal;