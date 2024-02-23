import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    fetchResults(event.target.value);
  };

  
  const fetchResults = async (query) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/planets/?search=${query}`);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='offset-3 col-md-6'>
      <input className='form-control'
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for planets..."
      />


<table>
      <thead>
        <tr>
        </tr>
      </thead>
      <tbody>
        {searchResults.map((planet) => (
          <tr key={planet.name}>
            <td>{planet.name} </td>
            <td ><span data-toggle="tooltip" title={planet.population}><PopulationIcons population={planet.population} /></span></td>
          </tr>
        ))}
      </tbody>
    </table>
      
    </div>
  );
};

const PopulationIcons = ({ population }) => {
    const iconCount = population === 'unknown' ? 0 : Math.ceil(parseInt(population) / 100000000)
  
    return (
      <div>
        {[...Array(iconCount)].map((_, index) => (
          <span key={index} className="population-icon">&#9733;</span>
        ))}
      </div>
    );
  };


  
  export default Search;