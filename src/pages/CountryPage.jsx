import React, { useEffect, useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import axios from 'axios'
import {Link} from 'react-router-dom'



function CountryPage() {

    const [country, setCountry] = useState ([])
    const URL = "https://restcountries.com/v3.1/all"
    console.log(URL)

   useEffect(() => {

// let countriesBox = []

async function displayAllCountries() {
  try {
    const countries= await axios.get(URL)
    const countriesBox = countries.data

    setCountry(countriesBox)
  } catch (error) { 
    console.log(error)
  }
// const slicedata = countriesBox.slice(0 , 5)

    
}


displayAllCountries()



   }, []) 
   console.log("yes", country)

  return (

<>
    <div className='h1'>

        <NavbarComponent/>
        <h1>This is the country page</h1>
    </div>
<div className='outer-div'>
  {country.slice(7 , 27).map((item)=> (
    <div className='yh'>
      <img src={item.flags.png} alt={item.flags.alt}/>
     <h1> {item.name.common}</h1>
     <h5>{item.name.official}</h5>
     <button className='btn'> 
     <Link to={`/country/${item.name.common} `} >See more</Link>
     </button>
    </div>
  ) )}
  </div>    
</>
    
  )
  
  }
export default CountryPage