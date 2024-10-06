import styled from "styled-components";

const ServersNavigation = styled.div`
    display: flex;
    flex-direction: column;
    background: #222222;
    flex: 1;
    height: 100%;
    padding: 20px;
`;

const DiscordLogo = styled.div`
    padding: 7px;
    background-color: #535bf2;
    border-radius: 10px;
    margin-bottom: 10px;
`;

const LineContainer = styled.div`
    width: 80%;
    height: 2px;
    background: #323232;
    margin: 5px;
`

const ActNavigationItem = styled.div`
    padding: 10px;
    background: #4a4d53;
    border-radius: 100px;
    color: #00b900;
    margin-bottom: 10px;
    margin-top: 10px;
`

export { DiscordLogo, ServersNavigation, LineContainer, ActNavigationItem }