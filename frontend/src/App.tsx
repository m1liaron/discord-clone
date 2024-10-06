import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { ChannelsPage, HomePage, LoginPage, RegisterPage } from './pages/pages.ts';
import * as React from 'react';
import { AppPath } from './common/enums/app/AppPath.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from './components/Navigation/AppLayout/AppLayout.tsx';

const App: React.FC = () => (
    <Router>
        <div className="app-container">
            <Routes>
                <Route path={AppPath.Login} element={<LoginPage />} />
                <Route path={AppPath.Register} element={<RegisterPage />} />

                <Route path={AppPath.Root} element={<HomePage/>} />
                <Route path={AppPath.ChannelsMe} element={
                    <AppLayout>
                        <ChannelsPage />
                    </AppLayout>
                } />
                <Route path="*" element={<Navigate to={AppPath.Root} />} />
            </Routes>
        </div>
    </Router>
);

export default App;
