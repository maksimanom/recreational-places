import React from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/RegisterModal.css';

const RegisterModal = (props) => (
  <Modal
    className="register-modal"
    isOpen={props.isOpen}
    onRequestClose={props.onRequestClose}
  >
    <form className="form" action="/auth/register" method="POST">
      <h1>Реєстрація</h1>
      <TextField
        hintText="Введіть логін"
        floatingLabelText="Логін"
        name="username"
        autoFocus
      /><br />
      <TextField
        hintText="Введіть пароль"
        floatingLabelText="Пароль"
        name="password"
        type="password"
      /><br />
      <TextField
        hintText="Введіть E-mail"
        floatingLabelText="E-mail"
        name="email"
      /><br />
      <TextField
        hintText="Введіть місто"
        floatingLabelText="Місто"
        name="address"
      /><br />
      <TextField
        hintText="Введіть номер телефону"
        floatingLabelText="Номер телефону"
        name="phone"
      /><br />
      <RaisedButton 
        className="btn" 
        label="Зареєструватись"
        primary={true} 
        type="submit"
      />
      <p>У Вас уже є акаунт? <a onClick={props.switch}>Увійти</a>.</p>
    </form>
  </Modal>
);

export default RegisterModal;