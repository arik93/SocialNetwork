import Dialogs from './Dialogs';
import { sendMessage } from '../../Redux/Reducers/DialogReducer'
import { connect } from 'react-redux';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


const mapStateToProps = (state) => {
  return {
    dialogUsers: state.dialogPage.dialogUsers,
    messages: state.dialogPage.messages,
  }
};

export default compose(
  connect(mapStateToProps, { sendMessage }),
  withAuthRedirect
)(Dialogs);