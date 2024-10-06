import * as React from 'react';
import {FaDiscord} from "react-icons/fa";
import { DiscordLogo, ServersNavigation, LineContainer } from "./ServersNavigationBar.styles.ts";

const ServersNavigationBar: React.FC = () => {
    return (
        <ServersNavigation>
            <div>
                <div>
                    <DiscordLogo>
                        <FaDiscord size={40} color="#fff"/>
                    </DiscordLogo>
                </div>
                <LineContainer/>
                <div>
                    <img/>
                </div>
                <div>
                    <img/>
                </div>
            </div>
        </ServersNavigation>
    );
};

export {ServersNavigationBar};