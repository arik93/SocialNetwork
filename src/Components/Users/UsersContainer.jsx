
import React from 'react';
import {
  requestUsers,
  follow,
  unfollow
} from '../../Redux/Reducers/UsersReducer'
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from './../Common/Preloader/Preloader';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import { 
  getUsers,
  getPageSize,  
  getTotalUsersAmount,
  getCurrentPage,
  getIsLoading,
  getFollowingInProgress
} from '../../Redux/Selectors/UsersSelector';


class UsersContainer extends React.Component {
  componentDidMount() {
    const { requestUsers, currentPage, pageSize } = this.props;

    requestUsers(currentPage, pageSize);
  }

  onPageChange = (pageNumber) => {
    const { requestUsers, pageSize } = this.props;

    requestUsers(pageNumber, pageSize);
  }

  render() {
    return (
      <>
        {this.props.isLoading ? <Preloader /> : null}
        <Users
          onPageChange={this.onPageChange}
          {...this.props}
        />
      </>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersAmount: getTotalUsersAmount(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    followingInProgress: getFollowingInProgress(state)
  }
};

export default compose(
  connect(mapStateToProps, { requestUsers, follow, unfollow }),
  withAuthRedirect
)(UsersContainer);