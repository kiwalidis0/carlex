import React, { useState } from "react";
import AdminPanel from "./AdminPanel";

function LogAdmin(){
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
        setUser({name: username, isAdmin})
    }
    return(
        <div>
            {user?
                (
                    <AdminPanel user={user}/>
                ):
                (
                    <div>
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
                            <select onChange={(e) => setAccountType(e.target.value)}>
                                <option value= "user">User</option>
                                <option value= "admin">Admin</option>
                            </select>
                        </div>
                        <button onClick={handLogin}>Login</button>
                        {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}
                        {loginAttempts > 0 && (
                            <p style={{color:'red'}}>Login Attempts: {loginAttempts}/3</p>
                        )}
                        <button onClick={handSignup}>Sign Up</button>
                    </div>
                )
            }
        </div>
    );
}

export default LogAdmin;