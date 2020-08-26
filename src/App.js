import React from "react";
import {  BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from  "./components/pages/Homepage";
import About from  "./components/pages/About";
import Footer from "./components/Footer";
import "./components/assets/all-pages-style.css";

function App(){
    return(
        <Router>
        <div>
            <NavBar />
            <Route exact path = "/portfolio" component={Homepage}/>
            <Route exact path = "/portfolio/about" component={About}/>
            <Footer />

        </div>
        </Router>
    );
}

export default App;