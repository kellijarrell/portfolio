import React from "react";
import "../assets/homepage.css";
import Card from "../Card";
import NamePlate from "../assets/images/NamePlate.svg"
import HoverImage from "react-hover-image";
import peach from "../assets/images/covid-peach.png";
import peachHover from "../assets/images/covid-peach-hover.gif";
import check from "../assets/images/checkpoint-controller.png";
import checkHover from "../assets/images/checkpoint-controller-hover.gif";
import sun from "../assets/images/weather-sun.png";
import sunHover from "../assets/images/weather-sun-hover.gif";


function Homepage() {

    var projects = [
        {
            title: "Mask Up Peaches",
            regImg: peach,
            hoverImg: peachHover,
            description: "A Georgia covid tracker that shows real time data using a D3 map. A site where a Georgia citizen, can find information on Covid-19. Where they can search by county in a easy to navigate visual format.",
            url: "https://warm-badlands-80819.herokuapp.com/"
        },
        {
            title: "Checkpoint",
            regImg: check,
            hoverImg: checkHover,
            description: "A video game search engine utilizing API data. The user can search for a game by title, displaying the game image, ESRB rating, and description. The user can also find the top rated games based on system on the right column.",
            url: "https://kellijarrell.github.io/Checkpoint/"
        },
        {
            title: "Weather Dashboard",
            regImg: sun,
            hoverImg: sunHover,
            description: "A weather dashboard that allows the user to pull data from the OpenWeather API. By entering a city into the sarch bar the user can find out the current weather and a 5 day forecast of that city. Previous inputs are saved to the side bar as buttons to reuse as needed.",
            url: "https://kellijarrell.github.io/weather-dash-homework/"
        }
    ]
    return (
        <div>
            <section id="home"
                className="jumbotron  jumbotron-fluid"
                style={{ textAlign: "center" }}>
                <div className="container">
                    <img src={NamePlate} style={{ height: "auto", width: "60%" }} />

                </div>
            </section>
            <div className="container">
                <div className="row">
                    {projects.map(project => (
                        <Card
                            title={project.title}
                            regImg={project.regImg}
                            hoverImg={project.hoverImg}
                            description={project.description}
                            url={project.url}

                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Homepage;