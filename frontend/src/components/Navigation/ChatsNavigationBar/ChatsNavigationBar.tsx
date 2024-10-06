import * as React from 'react';
import { Link } from 'react-router-dom';

const ChatsNavigationBar: React.FC = () => {
    return (
        <div className='navBar'>
            <div className='stocks'>
                <Link to="/">Home</Link>
            </div>
            <div className='favourites'>
                <Link to="/favourites">Favourites</Link>
            </div>
            <div className='cart'>
                <Link to="/cart">Cart</Link>
            </div>
            <div className='channels'>
                <Link to="/channels/@me">Channels</Link>
            </div>
        </div>
    );
}

export default ChatsNavigationBar;