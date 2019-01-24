import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { getUser } from '../actions/userActions';
import AccountModal from './AccountModal';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Edit from 'material-ui/svg-icons/image/edit.js';
import '../styles/Account.css';

export class Account extends React.Component {
  state = {
    accountModalOpen: false
  }

  toggleAccountModal = () => {
    this.setState({ accountModalOpen: !this.state.accountModalOpen });
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    if(!this.props.user) {
      return (
        <div className="account-container">
          <div className="loader">
            <img src="/img/loader.gif" />
            <h1>ЗАВАНТАЖЕННЯ ДАНИХ...</h1>
          </div>
        </div>
      );
    } else {
      return (
        <div className="account-container">
          <h1>Ваш кабінет</h1>
          <div className="account">
            <div className="account-info">
              <h2>Дані</h2>
              <Divider />
              <p><b>Логін: </b>{this.props.user.username}</p>
              <p><b>E-mail: </b>{this.props.user.email}</p>
              <p><b>Місто: </b>{this.props.user.address}</p>
              <p><b>Телефон: </b>{this.props.user.phone}</p>
              <RaisedButton
                className="btn"
                label="Редагувати дані"
                labelPosition="before"
                primary={true}
                icon={<Edit />}
                onClick={this.toggleAccountModal}
              />
            </div>
          </div>
          <AccountModal
            user={this.props.user}
            isOpen={this.state.accountModalOpen}
            onRequestClose={this.toggleAccountModal}
          />
        </div>
      );
    }
  }
};

const mapStateToProps = (state) => ({
  user: state.loggedUser
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);