import { useState } from 'react';
import { registerUser } from '../api/users';

export const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const user = await registerUser(name, email);
            setMessage(`User registered successfully with ID: ${user.id}`);
            setSuccess(true);
            setName('');
            setEmail('');
        } catch (error) {
            setMessage(`Failed to register user`);
            setSuccess(false);
        }
    };

    return (
        <div className="card">
            <h2>Register User</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter name"
                />
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter email"
                />
                <button type="submit">Register</button>
            </form>
            {message && (
                <p className={success ? 'success' : 'error'}>{message}</p>
            )}
        </div>
    );
};