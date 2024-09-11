import React, { useState } from "react";
import LoginPanel from "./LoginPanel";
import './login.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('user');
    const [user, setUser] = useState(null);
    
    const handLogin = () => {
        const isAdmin = accountType === "admin";
        setUser({name: username, isAdmin});
    }

    const handSignup = () => {
        const isAdmin = accountType === "admin";
        setUser({name: username, isAdmin});
    }

    return (
        <div className="login-container">
            {user ? (
                <LoginPanel user={user}/>
            ) : (
                <div className="login-form">
                    <h1>Login</h1>
                    <div>
                        <label>Username:</label>
                        <input 
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Account Type:</label>
                        <select value={accountType} onChange={(e) => setAccountType(e.target.value)}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button onClick={handLogin}>Login</button>
                    <button onClick={handSignup}>Sign Up</button>
                </div>
            )}
        </div>
    );
}

export default LoginForm;
