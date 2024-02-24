import { Link } from "react-router-dom";
import LogoIcon from "../assets/square-logo.svg?react";
interface ILogo {
    logoClassName?: string, 
    textClassName?: string
}
function Logo({logoClassName, textClassName}:ILogo) {
  return (
    <Link to="/" className="flex items-center justify-center">
        <LogoIcon className={`${logoClassName}`} />
        <span className={`block font-semibold ${textClassName}`}>linkup</span>
    </Link>
  )
}

export default Logo