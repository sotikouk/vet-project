import React from "react";
import pets from "./pets";
import Pet from "./pet";

function createPet(petD) {
    return (
      <Pet 
        key={petD.key}
        name={petD.name}
        type={petD.type}
      />
    );
  }
  

function petsDiv() {
    return (
        <div className="petsDiv">
            <h2>Pets</h2>           
                {pets.map(createPet)}
        </div>
    );
}

export default petsDiv;
