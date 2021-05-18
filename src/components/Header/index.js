import { useContext } from 'react';
import { ThemeContext } from '../../helpers/themeContext';
import './Header.scss';

const Header = () =>{

    const {theme, setTheme} = useContext(ThemeContext)

    console.log(theme)

    return(
        <header>
            <div className="title">Where in the world?</div>
            <div> 
                <button  className="theme-switcher" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Dark Mode</button>
            </div>
        </header>
    )
} 

export default Header