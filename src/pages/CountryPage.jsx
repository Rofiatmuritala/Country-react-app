import React from 'react'
import NavbarComponent from '../components/NavbarComponent'

function CountryPage() {

    const URL = "https://restcountries.com/v3.1/all"
    console.log(URL)

    // function displayCountries() {
    //     let allCountries = fetch (URL)
    //     .then((response) => 
    //     {console.log('country', response.json())
    // })
    // }
 
    // displayCountries()

    async function displayAllCountries() {
        const countries = await fetch(URL)
        console.log("countries", countries.json())}
    
displayAllCountries()
  return (


    <div>
        <p>This is the country page</p>
        <NavbarComponent/>
    </div>

  )
  }

export default CountryPage