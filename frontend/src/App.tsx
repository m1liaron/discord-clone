import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { ChannelsPage, HomePage, LoginPage, RegisterPage } from './pages/pages.ts';
import * as React from 'react';
import { AppPath } from './common/enums/app/AppPath.ts';
import {ChatsNavigationBar, MainNavigationBar, ServersNavigationBar} from "./components/Navigation/Navigaiton.ts";
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => (
    <Router>
        <div className="app-container">
            <Routes>
                <Route path={AppPath.Login} element={<LoginPage />} />
                <Route path={AppPath.Register} element={<RegisterPage />} />
                <Route path={AppPath.Root} element={<HomePage />} />
                <Route path={AppPath.ChannelsMe} element={
                    <div className="d-flex flex-row">
                        <ServersNavigationBar/>

                        <div className="flex-grow-1">
                            <div style={{ background: '#303030', padding: '10px', height: '100vh'}}>
                                <MainNavigationBar />
                                <ChatsNavigationBar />
                            </div>
                            <ChannelsPage />
                        </div>
                    </div>
                } />
                <Route path="*" element={<Navigate to={AppPath.Root} />} />
            </Routes>
        </div>
    </Router>
);

export default App;
