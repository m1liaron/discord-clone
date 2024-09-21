import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChannelsPage, HomePage, LoginPage, RegisterPage } from './pages/pages.ts';
import * as React from 'react';
import { AppPath } from './common/enums/app/AppPath.ts';
import ChatsNavigationBar from "./components/Navigation/ChatsNavigationBar/ChatsNavigationBar.tsx";

const App: React.FC = () => (
    <Router>
        <div className="app-container">
            <ChatsNavigationBar />
            <div className="main-content">
                <Routes>
                    <Route path={AppPath.Root} element={<HomePage />} />
                    <Route path={AppPath.Login} element={<LoginPage />} />
                    <Route path={AppPath.Register} element={<RegisterPage />} />
                    <Route path={AppPath.ChannelsMe} element={<ChannelsPage />} />
                </Routes>
            </div>
        </div>
    </Router>
);

export default App;
