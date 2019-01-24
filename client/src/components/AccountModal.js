import React from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/AccountModal.css';

class AccountModal extends React.Component {
  state = {
    email: this.props.user.email,
    address: this.props.user.address,
    phone: this.props.user.phone
  }

  onInputChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;

    this.setState({ [key]: value });
  }

  render() {
    return (
      <Modal
        className="account-modal"
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
      >
        <form className="form" action="/api/user" method="POST">
          <h1>Редагувати дані</h1>
          <TextField
            id="email"
            hintText="Введіть E-mail"
            floatingLabelText="E-mail"
            name="email"
            value={this.state.email}
            onChange={this.onInputChange}
          /><br />
          <TextField
            id="address"
            hintText="Введіть місто"
            floatingLabelText="Місто"
            name="address"
            value={this.state.address}
            onChange={this.onInputChange}
          /><br />
          <TextField
            id="phone"
            hintText="Введіть номер телефону"
            floatingLabelText="Номер телефону"
            name="phone"
            value={this.state.phone}
            onChange={this.onInputChange}
          /><br />
          <RaisedButton
            className="btn"
            label="Зберегти"
            primary={true}
            type="submit"
          />
        </form>
      </Modal>
    );
  }
}

export default AccountModal;