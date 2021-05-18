import './App.scss';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from "../../helpers/globalStyles"
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { lightTheme, darkTheme } from '../../helpers/theme'
import { ThemeContext } from '../../helpers/themeContext'

const  App = () => {

  const [countries, setCountries] = useState([])
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then((result)=>{setCountries(result)})
  }, [])


  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
          <div className="App">
            <Header />
            <div className="cards">
              {countries.map((country, index)=>(
                <Card key={index} countries={country} />
              ))}
            </div>
          </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
