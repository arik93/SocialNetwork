import { connect } from "react-redux";
// import { compose } from "redux";
import { login } from "../../Redux/Reducers/AuthReducer";
import LoginPage from "./LoginPage";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
};

export default connect(mapStateToProps, { login })(LoginPage);

