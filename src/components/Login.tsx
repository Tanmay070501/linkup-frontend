import Logo from "./Logo";
import DarkButton from "./common/DarkButton";
import TextInput from "./common/TextInput";
function Login() {
  return (
    <main className="p-8 sm:p-0 bg-gray-50 w-full min-h-screen sm:flex sm:flex-col sm:items-center sm:justify-center gap-2">
        <div className="flex flex-col gap-12 sm:gap-6 items-start sm:items-center">
        <div className="text-center">
            <Logo logoClassName="w-12 h-12" textClassName="text-3xl"/>
        </div>
        <form className="sm:bg-white flex flex-col justify-center items-center gap-6 sm:p-8 rounded-lg w-full sm:w-[450px]">
            <div className="w-full mb-4">
            <h4 className="text-3xl font-bold mb-2">Login</h4>
            <p className="font-extralight text-left">Add your details below to get back into the app</p>
            </div>
            <TextInput type="text" label="Email address"/> 
            <TextInput type="password" label="Password"/>
            <DarkButton className="w-full">
              Login
            </DarkButton>
            <p className="font-extralight text-center">
              Don't have an account? <a className="text-[#623dff]" href="/signup">Create account</a>
            </p>       
        </form>
        </div>

    </main>
  )
}

export default Login