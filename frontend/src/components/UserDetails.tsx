import { useState } from 'react';
import { getUser } from '../api/users';
import type { User } from '../types';

export const UserDetails = () => {
    const [userId, setUserId] = useState('');
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const fetchedUser = await getUser(Number(userId));
            setUser(fetchedUser);
            setError('');
        } catch (error) {
            setError('User not found');
            setUser(null);
        }
    };

    return (
        <div className="card">
            <h2>Find User</h2>
            <form onSubmit={handleSubmit}>
                <label>User ID:</label>
                <input
                    type="number"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                    placeholder="Enter user ID"
                />
                <button type="submit">Find User</button>
            </form>
            {error && <p className="error">{error}</p>}
            {user && (
                <div style={{ marginTop: '1.5em' }}>
                    <h3>User Details</h3>
                    <p>
                        <strong>ID:</strong> {user.id}
                    </p>
                    <p>
                        <strong>Name:</strong> {user.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>
                </div>
            )}
        </div>
    );
};