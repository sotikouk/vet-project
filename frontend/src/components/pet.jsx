import React from "react";

function Pet(props) {
    return (
        <div className="element">
            <h1>{props.Name}</h1>
            <p>{props.Type}</p>
            <p>{props.Owner}</p>
            <button className="editBtn">Edit</button>
            <button className="delBtn">Delete</button>
        </div>
    );
}

export default Pet;