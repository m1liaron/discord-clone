import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from './pages/pages.ts';
import * as React from "react";
import {AppPath} from "./common/enums/app/AppPath.ts";

const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path={AppPath.Root} element={<HomePage />}/>
            <Route path={AppPath.Login} element={<LoginPage />}/>
            <Route path={AppPath.Register} element={<RegisterPage />}/>
        </Routes>
    </Router>
)

export default App
