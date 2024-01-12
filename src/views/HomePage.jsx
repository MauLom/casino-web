import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';
// Import any additional components or styles

function HomePage() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        // Additional logout logic (if any)
    };

    return (
        <div>
            <header>
                <h1>MUR</h1>
                <p>This is the main page of our web application.</p>
            </header>

            <nav>
                <ul>
                    {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
                    {isLoggedIn && <li><button onClick={handleLogout}>Logout</button></li>}
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    {/* Add more navigation links as needed */}
                </ul>
            </nav>

            <main>
                <section>
                    <h2>About Our Platform</h2>
                    <p>Here you can manage your accounts, view your balances, and perform transactions.</p>
                    {/* Add more content about your platform */}
                </section>

                {/* You can add more sections here as needed */}
            </main>

            <footer>
                <p>© 2024 My Web Application</p>
                {/* Add footer content */}
            </footer>
        </div>
    );
}

export default HomePage;
