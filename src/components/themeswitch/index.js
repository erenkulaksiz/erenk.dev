import { DarkIcon, LightIcon } from "../../icons";

const ThemeSwitch = ({ onClick, theme, ...rest }) => {
    return (<a {...rest} href="#" onClick={onClick} className="absolute overflow-hidden right-4 top-4 z-50 rounded-lg">
        {theme == "dark" ? <LightIcon fill="currentColor" style={{ transform: "scale(.5)" }} /> : <DarkIcon fill="currentColor" style={{ transform: "scale(.5)" }} />}
    </a>)
}

export default ThemeSwitch;