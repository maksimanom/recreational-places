import React from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/LoginModal.css';

const LoginModal = (props) => (
  <Modal
    className="login-modal"
    isOpen={props.isOpen}
    onRequestClose={props.onRequestClose}
  >
    <form className="form" action="/auth/login" method="POST">
      <h1>Вхід</h1>
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
      <RaisedButton 
        className="btn" 
        label="Увійти"
        primary={true} 
        type="submit"
      />
      <p>Не маєте аккаунту в системі? <a onClick={props.switch}>Зареєструватись</a>.</p>
    </form>
  </Modal>
);

export default LoginModal;