import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import images from "../../constants/images";

const Login = () => {
    const [collegeId, setCollegeId] = useState('');
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (collegeId.trim()) {
            setIsLoggedIn(true); // Set login status in context
            navigate('/home');   // Navigate to HomePage
        }
    };

    return (
        <div className="header" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${images.header_bg}) center/cover no-repeat`
        }}>
            {/* <Navbar /> */}

            <div className="container">
                <div className="header__content text__center text__light flex flex__center">
                    <div className="header__content--left"></div>
                    <div className="header__content--right">
                        <h1 className="header__title fw__6">Welcome to Canara College of Engineering</h1>
                        <p className="para__text">
                            Canara College of Engineering is committed to providing quality education and fostering student growth.
                            Our programs are designed to prepare students for success in their careers and personal lives.
                        </p>
                       
                        <div className="position-relative" style={{ width: '100%', maxWidth: '400px', margin: '5 auto' }}>
                            <div className="bg-dark bg-opacity-75 p-4 rounded shadow-lg">
                                <h3 className="text-center text-white mb-4">Login with College ID</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Enter College ID" 
                                            value={collegeId} 
                                            onChange={(e) => setCollegeId(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary mt-3 w-100"
                                    >
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
