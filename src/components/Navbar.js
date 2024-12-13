import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Initialize navigation

    // Checking if the user is authenticated
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(setUser);
        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/logout'); // Redirect to Logout page
    };

    return (
        <div style={styles.container}>
            <header style={styles.navbar}>
                <div style={styles.navbarContent}>
                    <Link to="/" style={styles.logo}>SocialMediaClone</Link>
                </div>
            </header>
            <footer style={styles.footer}>
                <Link to="/" style={styles.footerLink}>
                     Home
                </Link>
                {!user && (
                    <>
                        <Link to="/login" style={styles.footerLink}>
                            Login
                        </Link>
                        <Link to="/register" style={styles.footerLink}>
                             Register
                        </Link>
                    </>
                )}
                {user && (
                    <>
                        <Link to="/profile" style={styles.footerLink}>
                             Profile
                        </Link>
                        <button onClick={handleLogout} style={styles.logoutButton}>
                             Logout
                        </button>
                    </>
                )}
            </footer>
        </div>
    );
};

// Simple styling for the Navbar and Footer
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#fafafa',
    },
    navbar: {
        backgroundColor: '#fff',
        padding: '10px 20px',
        borderBottom: '1px solid #dbdbdb',
        position: 'sticky',
        top: '0',
        zIndex: '1000',
    },
    navbarContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#000',
        textDecoration: 'none',
    },
    footer: {
        backgroundColor: '#fff',
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTop: '1px solid #dbdbdb',
    },
    footerLink: {
        color: '#0095f6',
        textDecoration: 'none',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
    },
    logoutButton: {
        backgroundColor: 'transparent',
        color: '#0095f6',
        border: 'none',
        padding: '8px 15px',
        cursor: 'pointer',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
    },
};

export default Navbar;
