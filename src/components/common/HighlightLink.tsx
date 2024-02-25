import { Link, LinkProps } from "react-router-dom"

interface HighlightLinkProps {
    path: LinkProps['to'],
    label: string
}
function HighlightLink({path, label}:HighlightLinkProps) {
  return (
    <Link className="text-[#623dff]" to={path}>
        {label}
    </Link>
  )
}

export default HighlightLink