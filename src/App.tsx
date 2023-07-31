import LogoIcon from "./assets/square-logo.svg"

function App() {
  return (
      <div className="min-h-screen bg-gray-100">
        <div className="pt-8 nav-container">
          <nav className="w-11/12 bg-white m-auto p-4 px-8 rounded-lg flex justify-between items-center">
            <a className="text-2xl font-bold flex" href="/"><span><img src={LogoIcon} alt="logo" /></span>linkup</a>
            <button className="border border-purple-600 rounded-lg px-4 py-2 text-purple-600 text-xl hover:bg-purple-200">Preview</button>
          </nav>
            
        </div>

      </div>
  )
}

export default App
