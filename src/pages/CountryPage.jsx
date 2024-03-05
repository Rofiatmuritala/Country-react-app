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

async function displayFiveCountries() {
      const response = await fetch(URL);
      const countries = await response.json();
            
          for (let i = 0; i < 5; i++) {
              console.log("Country", i+1, ":", countries[i].name.common);
         }
}
      displayFiveCountries()



  return (


    <div>
        <p>This is the country page</p>
        <NavbarComponent/>
    </div>

  )
  }

export default CountryPage