import { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../../helpers/globalStyles"
import { ThemeContext } from "./../ThemeStore"

const Theme = ({children}) => {
    const [ theme ] = useContext(ThemeContext)

    return(
        <ThemeProvider theme={theme[theme]}>
            <GlobalStyles/>
            {children}
        </ThemeProvider>
    )
}

export default Theme