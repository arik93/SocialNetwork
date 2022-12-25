import { connect } from "react-redux";
import { login } from "../../Redux/Reducers/AuthReducer";
import { getIsAuth } from "../../Redux/Selectors/AuthSelector";
import LoginPage from "./LoginPage";

const mapStateToProps = (state) => {
  return {
    isAuth: getIsAuth(state),
  }
};

export default connect(mapStateToProps, { login })(LoginPage);

