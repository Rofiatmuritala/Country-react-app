import React, { useEffect, useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Country2() {

  const [country, setCountry] = useState (null)

  const params = useParams()
  console.log("params", params)

  const URL =   `https://restcountries.com/v3.1/name/${params.countryName}`

  useEffect(() => {
    
    async function displayOneCountry() {
      try {
        const countries= await axios.get(URL)
        const countriesBox = countries.data
        console.log("yes", countriesBox[0])
    
        setCountry(countriesBox[0])
      } catch (error) { 
        console.log(error)
      }    
        
    }
    
    
    displayOneCountry()
    
    
    
       }, [params.countryName]) 

       if (!country){
        return <div>Loading...</div>
       }

    

  return (

    <>
    
      <NavbarComponent/>
    
      <h1>Welcome to the Country</h1>

      <div>
        <img src={country.flags.png} alt={country.flags.png}/>
        <h3>Name:  {country.name.common}</h3>
        <h3>Continent: {country.continents}</h3>
        <h3>GMT: {country.timezones}</h3>
        <img src= {country.coatOfArms.png} alt={country.flags.png}/>
        <img src={country.maps.openStreetMaps} alt={country.map}/>

        <h3>GMT: {country.population}</h3>
        {/* <h3>GMT: {country.coatOfArms.png}</h3> */}
        <Link>StreetMap: {country.maps.openStreetMaps}</Link>

      </div>

    </>
  )
}

export default Country2