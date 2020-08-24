import React from "react";
import "../assets/homepage.css";
import Card from "../Card";
import NamePlate from "../assets/images/NamePlate.svg"

function Homepage(){
    return(
<div>
<section id="home" 
className="jumbotron  jumbotron-fluid" 
style= {{textAlign: "center"}}>
        <div className="container">
        <img src={NamePlate} style= {{height: "auto", width: "60%"}}/>
            
        </div>
    </section>

  <Card/>
  
    
</div>
    )
}

export default Homepage;