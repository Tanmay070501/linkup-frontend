import { ReactNode } from 'react'
import Logo from '../Logo'

function UnauthenticatedLayout({children}: {children: ReactNode}) {
  return (
    <div className="flex flex-col gap-12 sm:gap-6 items-start sm:items-center">
    <div className="text-center">
        <Logo logoClassName="w-12 h-12" textClassName="text-3xl"/>
    </div>
        {children}
    </div>
  )
}

export default UnauthenticatedLayout