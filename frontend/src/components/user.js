
import React from "react";

function User(props) {

    return (
            <div className="element">
                <h1>{props.name}</h1>
                <h1>{props.lname}</h1>
                <p>{props.email}</p>
                <p>{props.npets}</p>
                <button className="editBtn">Edit</button>
                <button className="delBtn">Delete</button>
            </div>
    );
   
}

export default User;