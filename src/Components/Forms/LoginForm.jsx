import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../Utils/Validators/Validators';
import Input from '../Common/FormControls/Input';
import FormStyle from '../Common/FormControls/FormStyle.module.css'

const {
  flexStyle,
  formSummaryError
} = FormStyle;

function LoginForm(props) {
  const {
    handleSubmit,
    error
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder="Email"
          name="email"
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          name="password"
          component={Input}
          type="password"
          validate={[requiredField]}
        />
      </div>
      <div className={flexStyle}>
        <Field
          name="rememberMe"
          component={Input}
          type="checkbox"
        /> remember me
      </div>
      {
        error && <div className={formSummaryError}>{error}</div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: "loginForm"
})(LoginForm);