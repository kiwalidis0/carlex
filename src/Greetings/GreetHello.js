import React from "react";
import Greet from './Greet';
import './greet.css';

function GreetHello(){
    return(
      <div className="meow">
        <Greet name="Penguin"/>
        <Greet name="Chikin"/>
      </div>  
    );
}

export default GreetHello;