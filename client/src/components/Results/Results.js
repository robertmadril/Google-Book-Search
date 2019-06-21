import React from "react";

function Results({ title, subtitle, authors, link, description, image, Button }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <h2>{subtitle}</h2>
            <p>Written by: {authors}</p>
            <a className="btn btn-light" style={{width: "80px"}} target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <p>{description}</p>
            <div style={{height: "100px", width: "100px;"}}>
            <img className="img-thumbnail img-fluid" src={image}/>
            </div>
            <Button />
        </div>
    );
}

export default Results;