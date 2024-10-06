import * as React from 'react';
import {Link} from "react-router-dom";
import {AppPath} from "../../../common/enums/app/AppPath.ts";

const MainNavigationBar: React.FC = () => (
    <div className="d-flex flex-column">
        <ul className="d-flex flex-column">
            <li>
                <Link to={AppPath.ChannelsMe}>Друзі</Link>
            </li>
            <li>
                <Link to={AppPath.ChannelsMe}>Nitro</Link>
            </li>
            <li>
                <Link to={AppPath.ChannelsMe}>Крамниця</Link>
            </li>
        </ul>
    </div>
);

export { MainNavigationBar };