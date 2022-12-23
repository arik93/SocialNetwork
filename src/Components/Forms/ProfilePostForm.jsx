import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../Utils/Validators/Validators';
import Textarea from '../Common/FormControls/Textarea';

const maxLengthValidator30 = maxLengthCreator(30);

function ProfilePostForm(props) {
  const {
    handleSubmit
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        name="newPostBody"
        placeholder="Enter your post"
        validate={[requiredField, maxLengthValidator30]}
      />
      <button>Add Post</button>
    </form>
  )
};

export default reduxForm({
  form: "profilePostForm"
})(ProfilePostForm);
