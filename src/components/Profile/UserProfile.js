import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const UserProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.displayName || 'User '}</h1>
                    <img src={user.photoURL} alt="Profile" />
                    <p>{user.email}</p>
                    {/* Add more user details and posts here */}
                </div>
            ) : (
                <p>Please log in to view your profile.</p>
            )}
        </div>
    );
};

export default UserProfile;