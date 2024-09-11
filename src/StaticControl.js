import React from "react";

function StaticControl(){
    return(
        <div>
            <label>
                Username:
                <input type="text" placeholder="Enter Username"></input>
            </label>
            <label>
                Password:
                <input type="password" placeholder="Enter Password"></input>
            </label>
            <button>Login</button>
        </div>
    );
}

export default StaticControl;