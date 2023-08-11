
import { Outlet } from 'react-router-dom'

function Unauthenticated() {
  return (
    <main className="p-8 sm:p-0 bg-gray-50 w-full min-h-screen sm:flex sm:flex-col sm:items-center sm:justify-center gap-2">
       <Outlet/>
    </main>
  )
}

export default Unauthenticated