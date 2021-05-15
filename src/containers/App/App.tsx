import './App.scss';
import { ThemeContext, ThemeProvider } from 'styled-components'
import { GlobalStyles } from "../../helpers/globalStyles"
import { darkTheme, lightTheme } from '../../helpers/theme';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';

const  App = () => {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then((result)=>{setCountries(result)})
  }, [])

const [theme, setTheme] = useState('light');

const toggleTheme = () => {
  theme === 'light' ? setTheme('dark') : setTheme('light')
}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
        <div className="App">
          <header>
            <div className="title">Where in the world?</div>
            <div > <button  className="theme-switcher"
            onClick={toggleTheme}>Dark Mode</button></div>
        </header>
          <div className="cards">
            {countries.map((country, index)=>(
              <Card key={index} countries={country} />
            ))}
          </div>
        </div>
    </ThemeProvider>
  );
}

export default App;
