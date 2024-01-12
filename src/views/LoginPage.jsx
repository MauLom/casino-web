import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions/authActions';
import { logout } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom'; // or useHistory in React Router v5

import Web3 from 'web3';

function LoginPage() {
    const [message, setMessage] = React.useState('');

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const navigate = useNavigate(); // useHistory() in React Router v5

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        setMessage("Logged out!")
        // Additional logout logic (if any)
    };

    const handleLogin = async () => {
        if (window.ethereum) {
            try {
                // Request account access
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);

                // Get connected accounts
                const accounts = await web3.eth.getAccounts();
                setMessage(`Logged in with account: ${accounts[0]}`);

                // Dispatch login success action
                dispatch(loginSuccess());
                navigate('/');
                // Redirect or further actions after successful login
            } catch (error) {
                console.error("Error:", error);
                setMessage("Login failed: User denied account access.");

                // Handle errors, such as user denying account access
            }
        } else {
            setMessage('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
            // Handle case where MetaMask is not installed
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {!isLoggedIn && <button onClick={handleLogin}>Login with MetaMask</button>}
            {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
            {message && <p>{message}</p>}

        </div>
    );
}

export default LoginPage;
