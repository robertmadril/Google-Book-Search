import React from "react";

function Results({ title, subtitle, authors, link, description, image, Button }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <h2>{subtitle}</h2>
            <p>Written by:{authors}</p>
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <p>{description}</p>
            <img className="img-thumbnail img-fluid w-100" src={image}/>

        </div>
    );
}

export default Results;