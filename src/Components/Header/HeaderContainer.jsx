import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../Redux/Reducers/AuthReducer'
import { getIsAuth, getLogin } from '../../Redux/Selectors/AuthSelector';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    isAuth: getIsAuth(state),
    login: getLogin(state)
  }
}

export default connect(
  mapStatetoProps, { logout }
)(HeaderContainer)