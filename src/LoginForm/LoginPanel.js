import React from "react";
import './loginpanel.css'; // Import the CSS file

function LoginPanel({user}) {
    return (
        <div className="login-panel">
            {user.isAdmin ? (
                <div>
                    <h1>Admin Dashboard</h1>
                    <p>Welcome Admin, {user.name}!</p>
                    <button> Manage Users</button>
                    <button>Manage Settings</button>
                    <button>View Reports</button>
                    <button>Update Profile</button>
                </div>
            ) : (
                <div>
                    <h1>Guest Dashboard</h1>
                    <p>Welcome User, {user.name}!</p>
                    <button>Update profile</button>
                    <button>Settings</button>
                </div>
            )}
        </div>
    );
}

export default LoginPanel;
