import * as React from 'react';
import { Link } from 'react-router-dom';
import {ChatParticipantImage} from "./ChatsNavigationBar.styles.ts";
import { GoPlus } from "react-icons/go";

const ChatsNavigationBar: React.FC = () => {
    return (
        <div className='navBar'>
            <div style={{ marginLeft: 10 }}>
                <span style={{ textTransform: 'uppercase', color: '#8f8f8f', fontSize: '13px' }}>Привaтні повідомлення</span>
                <GoPlus color='#fff' size={20} style={{ cursor: 'pointer' }}/>
            </div>
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