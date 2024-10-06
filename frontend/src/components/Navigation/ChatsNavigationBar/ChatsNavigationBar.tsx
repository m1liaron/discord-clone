import * as React from 'react';
import { Link } from 'react-router-dom';
import {ChatParticipantImage} from "./ChatsNavigationBar.styles.ts";

const ChatsNavigationBar: React.FC = () => {
    return (
        <div className='navBar'>
            <ul>
                <li>
                    <div className="d-flex align-items-center w-100 p-3">
                        <Link to="" className="d-flex align-items-center gap-3">
                                <div className="d-flex justify-content-center w-25">
                                    <div>
                                        <ChatParticipantImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/800px-Cat03.jpg" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <span>Cat Friend</span>
                                </div>
                            </Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export { ChatsNavigationBar };