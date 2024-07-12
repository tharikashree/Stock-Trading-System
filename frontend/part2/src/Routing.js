import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PortfolioPage from './components/PortfolioPage';
import NewsPage from './components/NewsPage';
import ChartPage from './components/ChartPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import LogoutPage from './components/LogoutPage';
import UserProfilePage from './components/UserProfilePage';
import FinancialsPage from './components/FinancialsPage';


const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>} />
                <Route path="/portfolio" element={<PortfolioPage/>} />
                <Route path="/news" element={<NewsPage/>} />
                <Route path="/chart" element={<ChartPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>} />
                <Route path="/logout" element={<LogoutPage/>} />
                <Route path="/userprofile" element={<UserProfilePage />} />
                <Route path="/financials" element={<FinancialsPage />} />
            </Routes>
        </Router>
    );
};


export default Routing;