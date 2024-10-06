import * as React from 'react';
import {Link} from "react-router-dom";
import {AppPath} from "../../../common/enums/app/AppPath.ts";
import {BsPersonRaisedHand} from "react-icons/bs";
import {AiOutlineShop} from "react-icons/ai";

const MainNavigationBar: React.FC = () => (
    <div className="d-flex flex-column">
        <ul className="d-flex flex-column">
            <div>
                <li>
                    <Link to={AppPath.ChannelsMe} className="d-flex align-items-center mt-auto p-2">
                        <div>
                            <BsPersonRaisedHand color="#fff" size={30}/>
                        </div>
                        <div>
                            <div>Друзі</div>
                        </div>
                    </Link>
                </li>
            </div>
            <li>
                <Link to={AppPath.ChannelsMe} className="d-flex align-items-center mt-auto p-2">
                    <div>
                        <BsPersonRaisedHand color="#fff" size={30}/>
                    </div>
                    <div>
                        <div>Nitro</div>
                    </div>
                </Link>
            </li>
            <li>
                <Link to={AppPath.ChannelsMe} className="d-flex align-items-center mt-auto p-2">
                    <div>
                        <AiOutlineShop color="#fff" size={30}/>
                    </div>
                    <div>
                        <div>Крамниця</div>
                    </div>
                </Link>
            </li>
        </ul>
    </div>
);

export {MainNavigationBar};