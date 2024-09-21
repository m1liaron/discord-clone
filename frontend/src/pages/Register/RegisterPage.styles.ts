import styled from 'styled-components';
import backgroundImage from '../../assets/images/background/discord-login-background.png'

export const RegisterContainer = styled.div`
    display: flex;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
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

        input, select {
            background-color: #202225;
            border: 1px solid #40444b;
            padding: 10px;
            border-radius: 3px;
            margin-bottom: 20px;
            color: white;
            font-size: 14px;
            width: 100%;
            box-sizing: border-box;

            &:focus {
                outline: none;
                border-color: #7289da;
                background-color: #2f3136;
            }
        }

        a {
            color: #7289da;
            text-decoration: none;
            font-weight: bold;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

export const RegiserFormButton = styled.button`
            background-color: #7289da;
            border: none;
            color: white;
            padding: 10px;
            border-radius: 3px;
            font-size: 14px;
            cursor: pointer;
            margin-bottom: 10px;
            transition: background-color 0.3s ease;
            outline: none;

            &:hover {
                background-color: #677bc4;
            }

            &:focus {
                border: none;
            }
`

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px; 
    margin-bottom: 20px;

    select {
        background-color: #202225;
        color: white;
        border: 1px solid #40444b;
        padding: 10px;
        border-radius: 3px;
        margin-bottom: 20px;
        font-size: 14px;
        width: 100%;
        box-sizing: border-box;
        max-height: 40px; /* Adjust this value as needed */
        overflow-y: auto;

        /* Webkit-based browsers */
        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-track {
            background: #2f3136;
        }

        &::-webkit-scrollbar-thumb {
            background: #7289da;
            border-radius: 3px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: #202225;
        }
    }
`;


export const TermsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    #terms-checkbox {
        appearance: none; /* Remove default styles */
        width: 30px;
        height: 30px;
        background-color: #202225;
        border-radius: 5px; /* Optional: for rounded corners */
        cursor: pointer;
        position: relative;
        outline: none;

        /* Create a checkmark */
        &:checked::after {
            content: '';
            position: absolute;
            right: 5px;
            width: 14px;
            height: 9px;
            border: solid white;
            border-width: 0 0 1px 1px;
            transform: rotate(310qdeg);
            transform-origin: center;
        }

        &:checked {
            background-color: #7289da;
        }
    }

    p {
        margin-left: 10px;
        font-size: 14px;
        color: #b9bbbe;

        a {
            color: #7289da;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;