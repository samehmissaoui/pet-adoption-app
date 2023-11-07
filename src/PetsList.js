// PetsList.js
import React from 'react';
import PetCard from './PetCard';

function PetsList({ pets, onAdopt }) {
  return (
    <div className="pets-list">
      {pets.map((pet, index) => (
        <PetCard key={index} pet={pet} onAdopt={onAdopt} />
      ))}
    </div>
  );
}

export default PetsList;
