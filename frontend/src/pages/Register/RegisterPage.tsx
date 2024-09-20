import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { RegisterContainer, SelectContainer, TermsContainer, RegiserFormButton } from "./RegisterPage.styles.ts";
import { Link } from "react-router-dom";
import { AppPath } from "../../common/enums/app/AppPath.ts";
import { useAppDispatch } from "../../hooks/AppRedux.hooks.ts";
import { onRegister } from "../../redux/userSlice/userThunk.ts";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    displayName: Yup.string().required('Display name is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    month: Yup.string().required('Month is required'),
    day: Yup.number().min(1).max(31).required('Day is required'),
    year: Yup.number().required('Year is required')
});

const RegisterPage: React.FC = () => {
    const dispatch = useAppDispatch();

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

    const handleSubmit = (values: typeof initialValues) => {
        const { email, displayName, username, password, month, day, year } = values;
        const registerData = {
            email,
            displayName,
            username,
            password,
            dateOfBirth: new Date(+year, +month - 1, +day)
        };
        dispatch(onRegister(registerData));
    };

    return (
        <RegisterContainer>
            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <h2>Create an account</h2>

                            <label>Email</label>
                            <Field type="text" id="email" name="email" />
                            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

                            <label>Display Name</label>
                            <Field type="text" id="display_name" name="displayName" />
                            <ErrorMessage name="displayName" component="div" style={{ color: 'red' }} />

                            <label>Username *</label>
                            <Field type="text" id="username" name="username" />
                            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />

                            <label>Password *</label>
                            <Field type="password" id="password" name="password" />
                            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

                            <label>Date of Birth *</label>
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
                            <ErrorMessage name="month" component="div" style={{ color: 'red' }} />
                            <ErrorMessage name="day" component="div" style={{ color: 'red' }} />
                            <ErrorMessage name="year" component="div" style={{ color: 'red' }} />

                            <TermsContainer>
                                <Field type="checkbox" name="terms" />
                                <p>
                                    <span>I have read and agree to Discord </span>
                                    <Link to="https://discord.com/terms">Terms of Service</Link>
                                    <span> and </span> 
                                    <Link to="https://discord.com/privacy">Privacy Policy</Link>
                                    .
                                </p>
                            </TermsContainer>

                            <RegiserFormButton type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </RegiserFormButton>

                            <Link to={AppPath.Login}>Already have an account?</Link>
                        </Form>
                    )}
                </Formik>
            </div>
        </RegisterContainer>
    );
};

export { RegisterPage };
