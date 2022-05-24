import { DarkIcon, LightIcon } from "../../icons";

const ThemeSwitch = ({ onClick, theme, ...rest }) => {
    return (<a {...rest} href="#" onClick={onClick} className="absolute top-4 right-4 overflow-hidden z-50 rounded-lg">
        {theme == "dark" ? <LightIcon fill="currentColor" style={{ transform: "scale(.5)" }} /> : <DarkIcon fill="currentColor" style={{ transform: "scale(.5)" }} />}
    </a>)
}

export default ThemeSwitch;