import React from "react";
import Child from "./child";

function Parent(){
    return(
        <div>
            <h1>This is the parent component</h1>
            <Child />
        </div>
    );
}

export default Parent;