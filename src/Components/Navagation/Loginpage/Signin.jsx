import React, { useEffect, useState } from 'react';
import { auth, provider } from './Login';
import { signInWithPopup } from 'firebase/auth';

const Signin = () => {
    const [email, setEmail] = useState('');

    const handleClick = async () => {
        try {
            const data = await signInWithPopup(auth, provider);
            const userEmail = data.user.email;
            setEmail(userEmail);
            localStorage.setItem('email', userEmail);
            alert('Successfully Logged in');
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []); // Only run on mount

    const handleSignOut = () => {
        auth.signOut();
        setEmail(''); // Clear email from state on sign out
        localStorage.removeItem('email'); // Remove email from local storage
        alert('Successfully Logged out');
    };

    return (
        <div>
            {email ? 
                <>
                     <h3 style={{ color: 'white' }}>Welcome, Sasidhar</h3>
                    <button onClick={handleSignOut}>Sign Out</button>
                </>
             : 
                <div>
                    <button onClick={handleClick}>Hello, Sign In</button>
                    <button>/ Signup</button>
                </div>  
            }
        </div>
    );
};

export default Signin;
