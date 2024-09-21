import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { RegisterContainer, SelectContainer, RegiserFormButton } from "./RegisterPage.styles.ts";
import {Link, useNavigate} from "react-router-dom";
import { AppPath } from "../../common/enums/app/AppPath.ts";
import { useAppDispatch } from "../../hooks/AppRedux.hooks.ts";
import { onRegister } from "../../redux/userSlice/userThunk.ts";
import {RegisterRequest} from "../../common/types/User/RegisterRequest.ts";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    month: Yup.string().required('Month is required'),
    day: Yup.number().min(1).max(31).required('Day is required'),
    year: Yup.number().required('Year is required')
});

const RegisterPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigate();

    const initialValues = {
        email: '',
        displayName: '',
        username: '',
        password: '',
        month: '',
        day: '',
        year: ''
    };

    // Helper functions to create options for day, month, and year dropdowns
    const createOptionMonth = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months.map((month, index) => (
            <option key={index} value={index + 1}>{month}</option>
        ));
    };

    const createOptionDay = () => {
        return Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
            <option key={day} value={day}>{day}</option>
        ));
    };

    const createOptionYear = () => {
        const currentYear = new Date().getFullYear();
        return Array.from({ length: currentYear - 1829 }, (_, i) => currentYear - i).map(year => (
            <option key={year} value={year}>{year}</option>
        ));
    };

    const handleSubmit = async (values: typeof initialValues) => {
        const { email, displayName, username, password, month, day, year } = values;
        const registerData: RegisterRequest = {
            email,
            displayName,
            username,
            password,
            dateOfBirth: new Date(+year, +month - 1, +day)
        };
        const response = await dispatch(onRegister(registerData));
        if(onRegister.rejected.match(response)) {
            console.log('error')
        } else {
            navigation(AppPath.Root);
        }
    };

    return (
        <RegisterContainer>
            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form>
                            <h2>Create an account</h2>

                            <label style={{
                                color: errors.password && touched.password ? '#fa5959' : '#b9bbbe',
                                fontWeight: 'bold'
                            }}>
                                  <span style={{textTransform: 'uppercase'}}>
                                    {errors.password && touched.password ? 'EMAIL' : 'EMAIL *'}
                                  </span>
                                {errors.password && touched.password ? ' - Required' : ''}
                            </label>
                            <Field type="text" id="email" name="email"/>

                            <label style={{textTransform: 'uppercase'}}>Display name</label>
                            <Field type="text" id="display_name" name="displayName"/>

                            <label style={{
                                color: errors.password && touched.password ? '#fa5959' : '#b9bbbe',
                                fontWeight: 'bold'
                            }}>
                                  <span style={{textTransform: 'uppercase'}}>
                                    {errors.password && touched.password ? 'Username' : 'Username *'}
                                  </span>
                                {errors.password && touched.password ? ' - Required' : ''}
                            </label>
                            <Field type="text" id="username" name="username"/>

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

                            <label style={{
                                color: errors.password && touched.password ? '#fa5959' : '#b9bbbe',
                                fontWeight: 'bold'
                            }}>
                                  <span style={{textTransform: 'uppercase'}}>
                                    {errors.password && touched.password ? 'Date of Birth' : 'Date of Birth *'}
                                  </span>
                                {errors.password && touched.password ? ' - Required' : ''}
                            </label>
                            <SelectContainer>
                                <Field as="select" name="month">
                                    <option value="">Month</option>
                                    {createOptionMonth()}
                                </Field>
                                <Field as="select" name="day">
                                    <option value="">Day</option>
                                    {createOptionDay()}
                                </Field>
                                <Field as="select" name="year">
                                    <option value="">Year</option>
                                    {createOptionYear()}
                                </Field>
                            </SelectContainer>

                            <RegiserFormButton type="submit" disabled={isSubmitting}> Sign up </RegiserFormButton>

                            <Link to={AppPath.Login}>Already have an account?</Link>
                        </Form>
                    )}
                </Formik>
            </div>
        </RegisterContainer>
    );
};

export {RegisterPage};
