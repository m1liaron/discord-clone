import React from 'react';
import { LoginContainer } from "./LoginPage.styles.ts";
import { Link } from "react-router-dom";
import { AppPath } from "../../common/enums/app/AppPath.ts";

const LoginPage: React.FC = () => {
    return (
        <LoginContainer>
            <div>
                <form>
                    <h2>Welcome back</h2>
                    <p>We&apos;re so excited to see you again</p>

                    <label>EMAIL OR PHONE NUMBER *</label>
                    <input type="text" id="email"/>

                    <label>PASSWORD *</label>
                    <input type="password" id="password"/>
                    <button>Forgot your password?</button>

                    <button>Log in</button>
                    <span>Need an account? <Link to={AppPath.Register}>Register</Link></span>
                </form>
            </div>
        </LoginContainer>
    );
};

export {LoginPage};