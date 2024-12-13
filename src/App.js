import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import Register from './components/Auth/Register';
import InfiniteScroll from './components/Feed/InfiniteScroll';
import UserProfile from './components/Profile/UserProfile';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<InfiniteScroll />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
