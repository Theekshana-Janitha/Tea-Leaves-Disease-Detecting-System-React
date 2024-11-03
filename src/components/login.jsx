import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "../assets/css/login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const responseGoogle = (response) => {
        console.log(response);
        if (response.credential) {
            localStorage.setItem('user', JSON.stringify(response));
            // Handle successful login
            navigate('/'); // Redirect to home or dashboard
        }
    };

    const handleFailure = () => {
        // Handle login failure
        console.error('Login failed');
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <div className="container d-flex align-items-center justify-content-center min-vh-100">
                <div className="card shadow-lg p-5" style={{ maxWidth: '500px', width: '100%' }}>
                    <div className="text-center mb-4">
                        <h2 className="mb-1">Login</h2>
                        <p className="text-muted">Tea Leaves Disease Detection System</p>
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        // Handle email/password login here
                    }}>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
                    <div className="text-center mt-3">
                        <Link to="/forgotPassword" className="text-decoration-none">Forgot password?</Link>
                    </div>
                    <div className="text-center mt-3">
                        <p>Don't have an account? <Link to="/signUp" className="text-decoration-none">Sign up</Link></p>
                    </div>
                    <div className="text-center mt-4">
                        <h5>Or</h5>
                        <GoogleLogin
                            onSuccess={responseGoogle}
                            onFailure={handleFailure}
                        />
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}

export default Login;
