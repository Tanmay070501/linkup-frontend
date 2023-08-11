import React, { ReactNode } from 'react'
import Loader from "../../assets/bars.svg"
interface IDarkButton {
    children: ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    className?: string,
    loading?: boolean,
    disabled?: boolean,
}
function DarkButton({children, onClick, className, loading, disabled}:IDarkButton) {
  return (
    <button disabled={disabled || loading} className={`bg-[#623dff] p-3 rounded-lg text-white ${className} hover:opacity-90 disabled:opacity-75`} onClick={onClick}>
        {!loading && children}
        {loading && <img src={Loader} className='pointer-events-none w-5 m-auto'/>}
    </button>
  )
}

export default DarkButton