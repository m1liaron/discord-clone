import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { ChannelsPage, HomePage, LoginPage, RegisterPage } from './pages/pages.ts';
import * as React from 'react';
import { AppPath } from './common/enums/app/AppPath.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './components/Navigation/AppLayout/AppLayout.tsx';
import { getToken } from './utils/tokenActions.ts';

const App: React.FC = () => {
    const token: string | null = getToken();

    return (
        <Router>
            <div className="app-container">
                <Routes>
                    {!token ? 
                        (
                            <>
                                <Route path={AppPath.Login} element={<LoginPage />} />
                                <Route path={AppPath.Register} element={<RegisterPage />} />
                                <Route path={AppPath.ChannelsMe} element={<Navigate to={AppPath.Login} />}/>
                            </>
                        ) : (
                            <>
                                <Route path={AppPath.Login} element={<Navigate to={AppPath.ChannelsMe} />} />
                                <Route path={AppPath.Register} element={<Navigate to={AppPath.ChannelsMe } />} />
                                <Route path={AppPath.ChannelsMe} element={
                                    <AppLayout>
                                        <ChannelsPage />
                                    </AppLayout>
                                } />
                            </>
                        )
                    }   
                    <Route path={AppPath.Root} element={<HomePage/>} />
                    <Route path="*" element={<Navigate to={AppPath.Root} />} />
                </Routes>
            </div>
        </Router>
)};

export default App;
