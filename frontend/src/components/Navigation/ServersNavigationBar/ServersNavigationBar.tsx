import * as React from 'react';
import {FaDiscord} from "react-icons/fa";
import {DiscordLogo, ServersNavigation, LineContainer, ActNavigationItem} from "./ServersNavigationBar.styles.ts";
import {LuPlus} from "react-icons/lu";
import {IoMdDownload} from "react-icons/io";
import {Link} from "react-router-dom";
import {AppPath} from "../../../common/enums/app/AppPath.ts";

const ServersNavigationBar: React.FC = () => {
    return (
        <ServersNavigation>
            <div>
                <div>
                    <Link to={AppPath.ChannelsMe} >
                        <DiscordLogo>
                            <FaDiscord size={35} color="#fff"/>
                        </DiscordLogo>
                    </Link>
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