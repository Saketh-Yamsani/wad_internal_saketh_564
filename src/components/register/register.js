import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './register.css'; // Import the CSS file

const RegisterForm = ({ handleRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState(''); // Added state for age
    const [address, setAddress] = useState(''); // Added state for address
    const [gender, setGender] = useState(''); // Added state for gender
    const [phoneNumber, setPhoneNumber] = useState(''); // Added state for phone number
    const [email, setEmail] = useState(''); // Added state for email
    const navigate = useNavigate(); // Renamed useNavigate to navigate

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: uuid(),
            username,
            password,
            age,
            address,
            gender,
            phoneNumber,
            email
        };
        handleRegister(newUser);
        navigate('/login'); // Redirect to login after registration
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
                <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} required />
                <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
