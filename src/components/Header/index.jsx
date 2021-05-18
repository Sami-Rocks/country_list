import { useContext } from 'react';
import { ThemeContext } from '../../helpers/themeContext';
import './Header.scss';

const Header = () =>{

    const {theme, setTheme} = useContext(ThemeContext)

    return(
        <header>
            <div className="header">
                <div className="title">Where in the world?</div>
                <div> 
                    <button  
                        className="theme-switcher" 
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                        Dark Mode
                    </button>
                </div>
            </div>
        </header>
    )
} 

export default Header