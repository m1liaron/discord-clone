import * as React from 'react';
import {FaDiscord} from "react-icons/fa";
import {DiscordLogo, ServersNavigation, LineContainer, ActNavigationItem} from "./ServersNavigationBar.styles.ts";
import {LuPlus} from "react-icons/lu";
import {IoMdDownload} from "react-icons/io";

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

                <div></div>

                    <ActNavigationItem>
                        <LuPlus size={30}/>
                    </ActNavigationItem>
                <LineContainer/>

                <ActNavigationItem>
                    <IoMdDownload  size={30}/>
                </ActNavigationItem>
            </div>
        </ServersNavigation>
    );
};

export {ServersNavigationBar};