import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../Redux/Reducers/ProfileReducer';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import withRouter from '../../HOC/withRouter';
import { getProfile, getStatus } from '../../Redux/Selectors/ProfileSelector';
import { getAuthId, getIsAuth } from '../../Redux/Selectors/AuthSelector';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const {
      router,
      id,
      getUserProfile,
      getUserStatus
    } = this.props;

    let userId = router.params.userId;
    if (!userId) {
      userId = id
    }
    getUserProfile(userId);
    getUserStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props} />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    profile: getProfile(state),
    status: getStatus(state),
    id: getAuthId(state),
    isAuth: getIsAuth(state)
  }
};

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);