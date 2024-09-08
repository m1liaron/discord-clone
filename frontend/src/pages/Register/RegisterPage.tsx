import React from 'react';
import { RegisterContainer, SelectContainer, TermsContainer, RegiserFormButton } from "./RegisterPage.styles.ts";
import { Link } from "react-router-dom";
import { AppPath } from "../../common/enums/app/AppPath.ts";

const RegisterPage: React.FC = () => {

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

    return (
        <RegisterContainer>
            <div>
                <form>
                    <h2>Create an account</h2>

                    <label>EMAIL</label>
                    <input type="text" id="email"/>
                    
                    <label>DISPLAY NAME</label>
                    <input type="text" id="display_name"/>

                    <label>USERNAME *</label>
                    <input type="text" id="username"/>

                    <label>PASSWORD *</label>
                    <input type="password" id="password"/>

                    <label>DATE OF BIRTH *</label>
                    <SelectContainer>
                        <select>{createOptionMonth()}</select>
                        <select>{createOptionDay()}</select>
                        <select>{createOptionYear()}</select>
                    </SelectContainer>

                    <RegiserFormButton>Continue</RegiserFormButton>

                    <TermsContainer>
                        <input type='checkbox' id='terms-checkbox'/>
                        <p>
                            <span>I have read and agree to Discord's </span>
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
