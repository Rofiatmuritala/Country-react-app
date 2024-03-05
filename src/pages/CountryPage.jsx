import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import axios from 'axios'

function CountryPage() {

    const URL = "https://restcountries.com/v3.1/all"
    console.log(URL)

// let countriesBox = []

async function displayAllCountries() {
const countries= await axios.get(URL)

const countriesBox = countries.data
const slicedata = countriesBox.slice(0 , 5)

console.log('yes', slicedata.name)
slicedata.map(country => {
    console.log('yes', country.name.common)
    
})
return countriesBox

}

displayAllCountries()




  return (


    <div>
        <p>This is the country page</p>
        <NavbarComponent/>
    </div>

  )
  
  }
export default CountryPage