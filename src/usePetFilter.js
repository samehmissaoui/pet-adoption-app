// usePetFilter.js
import { useState } from 'react';

function usePetFilter(pets) {
  const [filters, setFilters] = useState({
    race: '',
    type: '',
    location: '',
  });

  const filteredPets = pets.filter((pet) => {
    const { race, type, location } = filters;
    return (
      pet.race.toLowerCase().includes(race.toLowerCase()) &&
      pet.type.toLowerCase().includes(type.toLowerCase()) &&
      pet.location.toLowerCase().includes(location.toLowerCase())
    );
  });

  return {
    filters,
    setFilters,
    filteredPets,
  };
}

export default usePetFilter;
