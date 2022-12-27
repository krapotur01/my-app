import React from 'react';
import { connect } from 'react-redux';
import styles from './Login.module.css';
import errorStyles from './../../../common/FormControls/FormControls.module.css';
import {login} from '../../../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const LoginForm = (props) => {
    return (
        <form action="submit" onSubmit={props.handleSubmit} >
            <div>
                {/* <Field placeholder={'login'} name={'login'} component={'input'} /> */}
            </div>
            <div>
                {/* <Field type="password" placeholder={'password'} name={'password'} component={'input'} /> */}
            </div>
            <div>
                {/* <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me */}
            </div>
            { props.error && <div className={errorStyles.formSummaryError}>{ props.error }</div> }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

// const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    
    if(props.isAuth) {
        return <Navigate to={`/profile/` + props.userId} />
    }

    return (
        <div className={styles.container}>
            <h2>Login</h2>
            {/* <LoginReduxForm onSubmit={onSubmit} /> */}
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
)

export default connect(mapStateToProps, {login}) (Login);