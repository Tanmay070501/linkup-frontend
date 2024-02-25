import React, { ReactNode } from 'react'
import Loader from './Loader'
interface IDarkButton {
    children: ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    className?: string,
    loading?: boolean,
    disabled?: boolean,
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
}
function DarkButton({children, onClick, className, loading, disabled, type}:IDarkButton) {
  return (
    <button type={type} disabled={disabled || loading} className={`bg-[#623dff] p-3 rounded-lg text-white ${className} hover:opacity-90 disabled:opacity-75`} onClick={onClick}>
        {!loading && children}
        {loading && <Loader className='text-white'/>}
    </button>
  )
}

export default DarkButton