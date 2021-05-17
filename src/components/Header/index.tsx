import { useContext } from 'react';
import { ThemeContext } from './../ThemeStore';
import './Header.scss';

const Header = () =>{

    const [ theme, themeSwitcher ] = useContext(ThemeContext)

    return(
        <header>
            <div className="title">Where in the world?</div>
            <div > <button  className="theme-switcher"
            onClick={()=>themeSwitcher("dark")}>Dark Mode</button></div>
        </header>
    )
}

export default Header