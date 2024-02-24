
import LoaderSvg from "../../assets/bars.svg?react"
function Loader() {
  return (
    <div className="flex w-full h-full justify-center items-center">
        <LoaderSvg className="w-10 h-8 text-violet-500"/>
    </div>
  )
}

export default Loader