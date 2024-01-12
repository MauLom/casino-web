import React from 'react';
import { Link } from 'react-router-dom';
// Import any additional components or styles

function LoginPage() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor="username">Username or Email</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Log In</button>
            </form>
            <Link to="/">Back to Home</Link>
            {/* Optionally, you can add links for "Forgot Password?" or "Sign Up" */}
        </div>
    );
}

export default LoginPage;
