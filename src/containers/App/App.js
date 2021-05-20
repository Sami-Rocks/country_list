import './App.scss';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from "../../helpers/globalStyles"
import Header from '../../components/Header';
import { lightTheme, darkTheme } from '../../helpers/theme'
import { ThemeContext } from '../../helpers/themeContext'
import CountryList from '../CountryList'

const  App = () => {

  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
          <div className="App">
            <Header />
            <CountryList />
          </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
