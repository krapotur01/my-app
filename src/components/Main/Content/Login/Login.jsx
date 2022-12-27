import React from 'react';
import { connect } from 'react-redux';
// import styles from './Login.module.css';
// import errorStyles from './../../../common/FormControls/FormControls.module.css';
import {login} from '../../../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? ( <div className="error">{meta.error}</div>) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
const Login = (props) => {
  if(props.isAuth) {
    return <Navigate to={`/profile/` + props.userId} />
  }

  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          login: '',
          password: '',
          rememberMe: false
        }}
        validationSchema={Yup.object({
          login: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          // rememberMe: Yup.boolean()
            // .required('Required')
            // .oneOf([true], 'You must accept the terms and conditions.'),
        })}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            props.login(values.login, values.password, values.rememberMe)
          }, 400);
        }}
      >
        <Form>
          <MyTextInput label="Email Address" name="login" type="email" placeholder="jane@formik.com" />
          <MyTextInput label="Password" name="password" type="password" />
          <MyCheckbox name="rememberMe">Remember Me</MyCheckbox>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
)

export default connect(mapStateToProps, {login}) (Login);