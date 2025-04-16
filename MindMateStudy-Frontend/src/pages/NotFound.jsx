// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
            <h1 className="text-7xl font-bold text-indigo-600">404</h1>
            <p className="mt-4 text-xl text-gray-700">Oops! The page you're looking for doesn't exist.</p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
            >
                Go back home
            </Link>
        </div>
    );
};

export default NotFound;
