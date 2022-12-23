import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../Utils/Validators/Validators';
import Textarea from '../Common/FormControls/Textarea';

const maxLengthValidator50 = maxLengthCreator(50);

function SendMessageForm(props) {
  const {
    handleSubmit
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessageBody"
          placeholder='Enter your message'
          validate={[requiredField, maxLengthValidator50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: "sendMessageForm"
})(SendMessageForm);
