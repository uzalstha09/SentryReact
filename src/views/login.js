import { connect } from 'react-redux';
import {
  setLoginBegin,
  setLoginSuccess,
  setLoginError,
} from '../actions/loginoutActions';
import LoginUI from './loginUI';

const mapStateToProps = state => {
  return {
    loggingIn: state.login.user.loggingIn,
    isLogin: state.login.user.isLogin,
    accessToken: state.login.user.accessToken,
    refreshToken: state.login.user.refreshToken,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoginBegin: () => {
      dispatch(setLoginBegin());
    },

    setLoginSuccess: (accessToken, refreshToken, userEmail) => {
      localStorage.setItem('RefreshToken', refreshToken);
      localStorage.setItem('AccessToken', accessToken);
      localStorage.setItem('UserEmail', userEmail);
      dispatch(setLoginSuccess(accessToken, refreshToken, userEmail));
    },

    setLoginError: () => {
      dispatch(setLoginError());
    },
  };
};

const logIn = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginUI);

export default logIn;
