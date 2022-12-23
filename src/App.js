import React from "react";
import AppStyle from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPageContainer from "./Components/Login/LoginPageContainer";
import { connect } from "react-redux";
import { initializeApp } from "./Redux/Reducers/AppReducer";
import { compose } from "redux";
import withRouter from "./HOC/withRouter";
import Preloader from "./Components/Common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className={AppStyle.appWrapper}>
        <HeaderContainer />
        <SidebarContainer />
        <div className={AppStyle.contentWrapper}>
          <Routes>
            <Route exact path='/' />

            <Route path="/profile">
              <Route index element={<ProfileContainer />} />
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>

            <Route
              path='/dialogs'
              element={<DialogsContainer />}
            />

            <Route
              path='/users'
              element={<UsersContainer />}
            />

            <Route
              path='/login'
              element={<LoginPageContainer />}
            />
          </Routes>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    initialized: state.app.initialized
  })
}

export default compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App)

