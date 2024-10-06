import * as React from 'react';
import {Link} from "react-router-dom";
import {AppPath} from "../../../common/enums/app/AppPath.ts";

const MainNavigationBar: React.FC = () => (
    <div className="d-flex flex-column">
        <ul>
            <Link to={AppPath.ChannelsMe}>Друзі</Link>
            <Link to={AppPath.ChannelsMe}>Nitro</Link>
            <Link to={AppPath.ChannelsMe}>Крамниця</Link>
        </ul>
    </div>
);

export { MainNavigationBar };