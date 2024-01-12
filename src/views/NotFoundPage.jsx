import React from 'react';
import { Link } from 'react-router-dom';
// Import any additional components or styles

function NotFoundPage() {
    return (
        <div>
            <h1>404: Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>You might have typed the URL incorrectly or the page might have been moved.</p>

            <Link to="/">Go Back Home</Link>
            {/* Optionally, you can provide additional navigation options */}
        </div>
    );
}

export default NotFoundPage;
