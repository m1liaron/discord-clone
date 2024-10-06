import React from 'react';
import { ServersNavigationBar, MainNavigationBar, ChatsNavigationBar } from '../Navigaiton';

interface LayoutProps {
    children: React.ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="d-flex flex-row">
            <ServersNavigationBar/>  

            <div style={{ background: '#303030', padding: '10px', height: '100vh' }}>
                <MainNavigationBar />
                <ChatsNavigationBar />
            </div>

            <div>
                {children}  {/* This will render the main content (chats, store, etc.) */}
            </div>
        </div>
    );
};

export default AppLayout;
