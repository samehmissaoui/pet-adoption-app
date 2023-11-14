// PetsList.js
import React from 'react';
import PetCard from './PetCard';

function PetsList({ pets, onAdopt ,onDelete}) {
  return (
    <div className="pets-list">
      {pets.map((pet, index) => (
        <PetCard key={index} pet={pet} onAdopt={onAdopt} onDelete={onDelete}/>
      ))}
    </div>
  );
}

export default PetsList;
