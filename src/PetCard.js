// PetCard.js
import React from 'react';

function PetCard({ pet, onAdopt }) {
  const { name, race, type, location, photo, status } = pet;

  return (
    <div className="pet-card">
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>Race: {race}</p>
      <p>Type: {type}</p>
      <p>Location: {location}</p>
      <p>Status: {status}</p>
      {status === 'available' && (
        <button onClick={() => onAdopt(pet)}>Adopt</button>
      )}
    </div>
  );
}

export default PetCard;
