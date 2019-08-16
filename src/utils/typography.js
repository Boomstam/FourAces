import Typography from "typography";
import doelgerTheme from 'typography-theme-doelger'
import altonTheme from 'typography-theme-alton'
import stowLakeTheme from 'typography-theme-stow-lake'

const typography = new Typography(
    stowLakeTheme,
    {
        //headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        //bodyFontFamily: ['Georgia', 'serif'],
        
    }
);
 
export default typography;