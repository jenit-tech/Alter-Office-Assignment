import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import './Login.css'; // Import the CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect or show success message here if necessary
        } catch (error) {
            setError('Failed to log in. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        setError('');
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            // Redirect or show success message here if necessary
        } catch (error) {
            setError('Google login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page-container">
            <div className="container">
                <h2>Login</h2>
                <form onSubmit={handleLogin} className="form">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="input"
                        required
                    /><br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="input"
                        required
                    /><br />
                    <button type="submit" className="button" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                {error && <p className="error">{error}</p>}
                <button onClick={handleGoogleLogin} className="google-button" disabled={loading}>
                    {loading ? 'Logging in with Google...' : 'Login with Google'}
                </button>
            </div>
        </div>
    );
};

export default Login;
