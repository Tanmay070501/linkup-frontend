import LogoIcon from "../assets/square-logo.svg";
interface ILogo {
    logoClassName?: string, 
    textClassName?: string
}
function Logo({logoClassName, textClassName}:ILogo) {
  return (
    <a href="/" className="flex items-center justify-center">
        <img className={`block ${logoClassName}`} src={LogoIcon} alt="logo-icon" />
        <span className={`block font-semibold ${textClassName}`}>linkup</span>
    </a>
  )
}

export default Logo