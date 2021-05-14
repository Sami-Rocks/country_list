import './App.scss';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from "../../helpers/globalStyles"
import { darkTheme, lightTheme } from '../../helpers/theme';
import { useState } from 'react';

const  App = () => {

const [theme, setTheme] = useState('light');

const toggleTheme = () => {
  theme === 'light' ? setTheme('dark') : setTheme('light')
}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
        <div className="App">
          <button onClick={toggleTheme} >Toggle Theme</button>
          <h1>Title Text</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, nemo assumenda natus saepe iste at consequuntur voluptatum reprehenderit! Laboriosam amet animi provident porro obcaecati temporibus aliquam, error ipsa impedit explicabo?</p>
        </div>
    </ThemeProvider>
  );
}

export default App;
