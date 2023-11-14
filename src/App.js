// App.js
import React, { useState } from 'react';
import PetsList from './PetsList';
import usePetFilter from './usePetFilter';
import img4 from './images/img4.jpg';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg'

function App() {
  const [pets, setPets] = useState([
    {
      name: 'Buddy',
      race: 'Golden Retriever',
      type: 'Dog',
      location: 'New York',
      photo: img1,
      status: 'available',
    },
    {
      name: 'Buddy',
      race: 'Golden Retriever',
      type: 'Dog',
      location: 'New York',
      photo: img2,
      status: 'available',
    },
    {
      name: 'Buddy',
      race: 'Golden Retriever',
      type: 'cat',
      location: 'New York',
      photo: img3,
      status: 'available',
    },{
      name: 'Buddy',
      race: 'Golden Retriever',
      type: 'cat',
      location: 'New York',
      photo: img4,
      status: 'available',
    }
    // Add more pets here...
  ]);

  const { filters, setFilters, filteredPets } = usePetFilter(pets);

  const handleAdopt = (adoptedPet) => {
    console.log(adoptedPet);
    setPets((Pets) =>
      Pets.map((pet) =>
        // pet === adoptedPet ? { ...pet, status: 'adopted' } : pet
        adoptedPet.status === "adopted" ? {...pet ,status :'not adopted'}:{...pet ,status :'adopted'}
      )
    );
  };
  const handelDelete = (deletedPet) => {
    setPets((Pets) => {
      const updatedPets = Pets.filter((pet) => pet !== deletedPet);
      return updatedPets;
    });
  };

  return (
    <div className="App">
      <h1>Pet Adoption</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by race"
          value={filters.race}
          onChange={(e) => setFilters({ ...filters, race: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by type"
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
      </div>
      <PetsList pets={filteredPets} onAdopt={handleAdopt} onDelete={handelDelete} />
    </div>
  );
}

export default App;
