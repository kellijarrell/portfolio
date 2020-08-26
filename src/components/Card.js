import React from "react";
import HoverImage from "react-hover-image";


function Card(props) {
    return (


                <div className="card col-sm"
                    style={{ width: "18rem" }}>
                    <a 
                    href={props.url} 
                    target="_blank">
                    <HoverImage 
                    src={props.regImg} 
                    hoverSrc={props.hoverImg} 
                    className="card-img-top"
                    alt="peach wearing mask"
                    style={{ borderRadius: "10px" }}/>
                    </a>
                    <div className="card-body">
                        <h5 className="card-title"
                            style={{ color: "white" }}>
                            {props.title}
                                </h5>
                        <p className="card-text"
                            style={{ color: "white" }}>
                            {props.description}
                            </p>
                        <a 
                        href={props.url} 
                        target="_blank"
                        className="btn btn-outline-light">
                            View Here
                            </a>
                    </div>
                </div>


    )
}

export default Card;