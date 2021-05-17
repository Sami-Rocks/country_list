import './App.scss';
import { ThemeContext, ThemeProvider } from 'styled-components'
import { GlobalStyles } from "../../helpers/globalStyles"
import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { ThemeStore } from '../../components/ThemeStore';
import Theme from '../../components/Theme/theme';

const  App = () => {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then((result)=>{setCountries(result)})
  }, [])

  return (
  <ThemeStore>
    <Theme>
        <div className="App">
            <Header/>
            <div className="cards">
              {countries.map((country, index)=>(
                <Card key={index} countries={country} />
              ))}
            </div>
          </div>
    </Theme>
  </ThemeStore>
  );
}

export default App;
