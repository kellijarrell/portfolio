import React from "react";
import HoverImage from "react-hover-image";
import peach from "./assets/images/covid-peach.png";
import peachHover from "./assets/images/covid-peach-hover.gif";
import check from "./assets/images/checkpoint-controller.png";
import checkHover from "./assets/images/checkpoint-controller-hover.gif";
import sun from "./assets/images/weather-sun.png";
import sunHover from "./assets/images/weather-sun-hover.gif"


function Card(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="card col-sm"
                    style={{ width: "18rem" }}>
                    <a href="https://warm-badlands-80819.herokuapp.com/" target="_blank">
                    <HoverImage src={peach} hoverSrc={peachHover} 
                    className="card-img-top"
                    alt="peach wearing mask"
                    style={{ borderRadius: "10px" }}/>
                    </a>
                    <div className="card-body">
                        <h5 className="card-title"
                            style={{ color: "white" }}>
                            Mask Up Peaches
                                </h5>
                        <p className="card-text"
                            style={{ color: "white" }}>
                            A Georgia covid tracker that shows real time data using a D3 map. A site where a Georgia citizen, can find information on Covid-19. Where they can search by county in a easy to navigate visual format.
                            </p>
                        <a href="https://warm-badlands-80819.herokuapp.com/" className="btn btn-outline-light">
                            View Here
                            </a>
                    </div>
                </div>
                <div className="card col-sm"
                    style={{ width: "18rem" }}>
                    <a href="https://kellijarrell.github.io/Checkpoint/" target="_blank">
                    <HoverImage src={check} hoverSrc={checkHover}
                            className="card-img-top"
                            alt="vintage game controller"
                            style={{ borderRadius: "10px" }} /></a>
                    <div className="card-body">
                        <h5 className="card-title"
                            style={{ color: "white" }}>
                            Checkpoint
                                </h5>
                        <p className="card-text"
                            style={{ color: "white" }}>
                            A video game search engine utilizing API data. The user can search for a game by title, displaying the game image, ESRB rating, and description. The user can also find the top rated games based on system on the right column.
                                </p>
                        <a href="https://kellijarrell.github.io/Checkpoint/" className="btn btn-outline-light">
                            View Here
                            </a>
                    </div>
                </div>
                <div className="card col-sm"
                    style={{ width: "18rem" }}>
                    <a href="https://kellijarrell.github.io/weather-dash-homework/" target="_blank">
                    <HoverImage src={sun} hoverSrc={sunHover}
                            className="card-img-top"
                            alt="Sun with cloud"
                            style={{ borderRadius: "10px" }} /></a>
                    <div className="card-body">
                        <h5 className="card-title"
                            style={{ color: "white" }}>
                            Weather Dashboard
                                </h5>
                        <p className="card-text"
                            style={{ color: "white" }}>
                            A weather dashboard that allows the user to pull data from the OpenWeather API. By entering a city into the sarch bar the user can find out the current weather and a 5 day forecast of that city. Previous inputs are saved to the side bar as buttons to reuse as needed.
                                </p>
                        <a href="https://kellijarrell.github.io/weather-dash-homework/" className="btn btn-outline-light">
                            View Here
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;