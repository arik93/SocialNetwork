import Dialogs from './Dialogs';
import { sendMessage } from '../../Redux/Reducers/DialogReducer'
import { connect } from 'react-redux';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import { getDialogUsers, getMessages } from '../../Redux/Selectors/DialogSelector';


const mapStateToProps = (state) => {
  return {
    dialogUsers: getDialogUsers(state),
    messages: getMessages(state),
  }
};

export default compose(
  connect(mapStateToProps, { sendMessage }),
  withAuthRedirect
)(Dialogs);