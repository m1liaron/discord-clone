import React from 'react';
import { LoginContainer } from "./LoginPage.styles.ts";
import {Link, useNavigate} from "react-router-dom";
import { AppPath } from "../../common/enums/app/AppPath.ts";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {useAppDispatch} from "../../hooks/AppRedux.hooks.ts";
import {onLogin} from "../../redux/userSlice/userThunk.ts";

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});


const LoginPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = async (values: typeof initialValues) => {
        const response = await dispatch(onLogin(values));
        if(onLogin.rejected.match(response)) {
            console.log('Error registering');
        } else {
            navigation(AppPath.ChannelsMe);
        }
    }

    return (
        <LoginContainer>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, isSubmitting}) => (
                    <Form>
                        <h2>Welcome back</h2>
                        <p>We&apos;re so excited to see you again</p>

                        <label style={{
                            color: errors.email && touched.email ? '#fa5959' : '#b9bbbe',
                            fontWeight: 'bold'
                        }}>
                                  <span style={{textTransform: 'uppercase'}}>
                                    {errors.email && touched.email ? 'EMAIL OR PHONE NUMBER' : 'EMAIL OR PHONE NUMBER *'}
                                  </span>
                            {errors.email && touched.email ? ' - Required' : ''}
                        </label>
                        <Field type="text" id="email" name="email"/>

                        <label style={{
                            color: errors.password && touched.password ? '#fa5959' : '#b9bbbe',
                            fontWeight: 'bold'
                        }}>
                                  <span style={{textTransform: 'uppercase'}}>
                                    {errors.password && touched.password ? 'Password' : 'Password *'}
                                  </span>
                            {errors.password && touched.password ? ' - Required' : ''}
                        </label>
                        <Field type="password" id="password" name="password"/>

                        <button type="submit" disabled={isSubmitting}>Forgot your password?</button>

                        <button>Log in</button>
                        <span>Need an account? <Link to={AppPath.Register}>Register</Link></span>
                    </Form>
                )}
            </Formik>
        </LoginContainer>
    );
};

export {LoginPage};