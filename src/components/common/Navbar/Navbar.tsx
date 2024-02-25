import Logo from "../../Logo"


function Navbar() {
  return (
    <div
        className="w-full bg-white rounded-md border shadow-sm py-6 px-4 flex items-center"
    >
        <Logo logoClassName="w-8 h-8" textClassName="text-2xl"/>
    </div>
  )
}

export default Navbar