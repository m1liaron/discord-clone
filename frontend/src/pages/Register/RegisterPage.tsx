import React, {FormEvent, useState} from 'react';
import { RegisterContainer, SelectContainer, TermsContainer, RegiserFormButton } from "./RegisterPage.styles.ts";
import { Link } from "react-router-dom";
import { AppPath } from "../../common/enums/app/AppPath.ts";
import {useAppDispatch} from "../../hooks/AppRedux.hooks.ts";
import {onRegister} from "../../redux/userSlice/userThunk.ts";

const RegisterPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [displayName, setDisplayName] = useState<string>('');
    const [userName, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [month, setMonth] = useState<string>('');
    const [day, setDay] = useState<string>('');
    const [year, setYear] = useState<string>('');

    const dispatch = useAppDispatch();

    const createOptionMonth = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months.map((month, index) => (
            <option key={index} value={month}>{month}</option>
        ));
    }

    const createOptionDay = () => {
        const days = [];
        for(let i = 1; i < 32; i++){
            days.push(i);
        }
        return days.map((day, i) => (
            <option key={i} value={day}>{day}</option>
        ));
    }

    const createOptionYear = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for(let i = currentYear; i >= 1830; i--) {
            years.push(i);
        }
        return years.map((year, i) => (
            <option key={i} value={year}>{year}</option>
        ));
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const registerData = {
            email,
            displayName,
            userName,
            password,
            month,
            day,
            year
        };

        Object.keys(registerData).map(() => {

        });

        dispatch(onRegister(registerData));
    }

    return (
        <RegisterContainer>
            <div>
                <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
                    <h2>Create an account</h2>

                    <label>EMAIL</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                        aria-errormessage='This input is required'
                    />
                    
                    <label>DISPLAY NAME</label>
                    <input
                        type="text"
                        id="display_name"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        required={true}
                        aria-errormessage='This input is required'
                    />

                    <label>USERNAME *</label>
                    <input
                        type="text"
                        id="username"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        required={true}
                        aria-errormessage='This input is required'
                    />

                    <label>PASSWORD *</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required={true}
                        aria-errormessage='This input is required'
                    />

                    <label>DATE OF BIRTH *</label>
                    <SelectContainer>
                        <select value={month} onChange={(e) => setMonth(e.target.value)}>
                            {createOptionMonth()}
                        </select>
                        <select value={day} onChange={(e) => setDay(e.target.value)}>
                            {createOptionDay()}
                        </select>
                        <select value={year} onChange={(e) => setYear(e.target.value)}>
                            {createOptionYear()}
                        </select>
                    </SelectContainer>

                    <RegiserFormButton type="submit">Submit</RegiserFormButton>

                    <TermsContainer>
                        <input type='checkbox' id='terms-checkbox'/>
                        <p>
                            <span>I have read and agree to Discord </span>
                            <Link to="https://discord.com/terms">Terms of Service</Link>
                            <span> and </span> 
                            <Link to="https://discord.com/privacy">Privacy Policy</Link>
                            .
                        </p>
                    </TermsContainer>
                    
                    <Link to={AppPath.Login}>Already have an account?</Link>
                </form>
            </div>
        </RegisterContainer>
    );
};

export { RegisterPage };
