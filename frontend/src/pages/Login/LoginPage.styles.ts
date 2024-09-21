import styled from 'styled-components';
import backgroundImage from '../../assets/images/background/discord-login-background.png'

export const LoginContainer = styled.div`
    display: flex;
    background-image: url(${backgroundImage});
    background-size: cover; /* Make sure the image covers the entire container */
    background-position: center; /* Center the background image */
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw; 
    color: white;
    flex: 1;

    form {
        background-color: #2f3136;
        padding: 40px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        width: 400px;
        display: flex;
        flex-direction: column;

        h2 {
            margin-bottom: 0;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
        }

        p {
            margin-bottom: 20px;
            font-size: 14px;
            color: #b9bbbe;
            text-align: center;
        }

        label {
            margin-bottom: 8px;
            font-size: 12px;
            font-weight: bold;
            color: #b9bbbe;
        }

        input {
            background-color: #202225;
            border: none;
            padding: 10px;
            border-radius: 3px;
            margin-bottom: 20px;
            color: white;
            font-size: 14px;
            width: 100%;
            box-sizing: border-box;

            &:focus {
                outline: none;
                border: 1px solid #7289da;
            }
        }

        button {
            background-color: #7289da;
            border: none;
            color: white;
            padding: 10px;
            border-radius: 3px;
            font-size: 14px;
            cursor: pointer;
            margin-bottom: 10px;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #677bc4;
            }

            &:first-of-type {
                background: none;
                color: #7289da;
                text-align: left;
                margin-bottom: 20px;
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        a {
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;
