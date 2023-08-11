import React, { ReactNode } from 'react'
interface IDarkButton {
    children: ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    className?: string
}
function DarkButton({children, onClick, className}:IDarkButton) {
  return (
    <button className={`bg-[#623dff] p-3 rounded-lg text-white ${className}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default DarkButton