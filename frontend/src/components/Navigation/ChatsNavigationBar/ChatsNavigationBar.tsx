import * as React from 'react';
import { Link } from 'react-router-dom';

const ChatsNavigationBar: React.FC = () => {
    return (
        <div className='navBar'>
            <ul>
                <li className="m-lg-5">
                    <div className="d-flex align-items-center w-100">
                        <Link to="" className="d-flex flex-grow-1 overflow-hidden align-items-center gap-5">
                            <div className="h-50 d-flex align-items-center p-5">
                                <div className="d-flex justify-content-center flex-grow-1 w-25">
                                    <div>
                                        <img className="h-100 w-100" src="/img/logo.png" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <span>Friend 1</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export { ChatsNavigationBar };