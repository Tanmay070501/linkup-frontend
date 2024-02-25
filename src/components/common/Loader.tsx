
import LoaderSvg from "../../assets/bars.svg?react"
interface LoaderProps {
    className?: string
}

function Loader({className = ''}: LoaderProps) {
  return (
    <div className="flex w-full h-full justify-center items-center">
        <LoaderSvg className={`w-10 h-8 ${className || 'text-[#623dff]'}`}/>
    </div>
  )
}

export default Loader