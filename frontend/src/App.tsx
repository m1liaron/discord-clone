import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {ChannelsPage, HomePage, LoginPage, RegisterPage} from './pages/pages.ts';
import * as React from "react";
import {AppPath} from "./common/enums/app/AppPath.ts";

const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path={AppPath.Root} element={<HomePage />}/>
            <Route path={AppPath.Login} element={<LoginPage />}/>
            <Route path={AppPath.Register} element={<RegisterPage />}/>
            <Route path={AppPath.ChannelsMe} element={<ChannelsPage />}/>
        </Routes>
    </Router>
)

export default App
