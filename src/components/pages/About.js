import React from "react";
import headshot from "../assets/images/headshot2.jpg"
import "../assets/about.css"

function About() {
    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <h1 id="title">Let's Chat!</h1>
                    <hr />
                </div>

            </div>

            <div className="card text-white mb-3" style={{ maxWidth: "540px" }, { backgroundColor: "#000000" }}>
                <div className="row">
                    <div className="col-md-4">
                        <img src={headshot} className="card-img" alt="Image of Designer" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">My name is Kelli Jarrell and I am a Georgia Southern graduate with a degree in Graphic Design. I currently reside in Pooler, Ga where I live with my fiance and my 20 year old cat. I enjoy video games and avoiding people. Also my hair will be changing every month or so, it's just normal.</p>
                            <br/>
                            <p className="card-text" style={{ textAlign: "center" }}>
                            <div className="row">
                                <div className="col-sm">
                                    <i className="far fa-envelope" style={{ fontSize: "30px" }} ></i><br />
                                    KelliAJarrell@Gmail.com
                                </div>
                                <div className="col-sm">
                                    <i className="fas fa-phone" style={{ fontSize: "30px" }}></i> 
                                    <br />
                                    (912)-856-2277</div>
                                
               
                            </div>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;