import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
const Services = () => {
  const [dog, setDog] = useState([]);
  const [search , setsearch] = useState('');
  const getDog = async () => {
    try {
      const response = await axios('https://www.freetestapi.com/api/v1/dogs');
      setDog(response.data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    getDog();
  }, []); 
  const searchedItem = dog.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
 return (
    <>
    
    <h1>Services</h1>
<input type="search" placeholder='Search Here...' value={search} onChange={(e)=> setsearch(e.target.value)} />

 {
 searchedItem.map((item)=>{
 return(
  <div key={item.id}> 
<h1>
  ID:{item.id} <br />
  NAME:{item.name} <br />
  COLOR:{item.colors} <br /> <br /> <br /> <br /> <br /> 
</h1>
  </div>
 )
  })
 }
    </>
  );
}
export default Services;
