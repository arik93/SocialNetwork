
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
  getTotalUsersCount,
  getCurrentPage,
  getIsLoading,
  getFollowingInProgress
} from '../../Redux/Selectors/UsersSelector';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
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

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isLoading: state.usersPage.isLoading,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// };


const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    followingInProgress: getFollowingInProgress(state)
  }
};

export default compose(
  connect(mapStateToProps, { requestUsers, follow, unfollow }),
  withAuthRedirect
)(UsersContainer);