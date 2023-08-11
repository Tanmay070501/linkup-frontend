import TextInput from "./common/TextInput";
import DarkButton from "./common/DarkButton";
import { Link } from "react-router-dom";
import React from "react";
import {GrMail} from "react-icons/gr";
import  {TiLockClosed} from "react-icons/ti"
import UnauthenticatedLayout from "./layouts/UnauthenticatedLayout";
function Login() {
  const loginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
  }
  return (
    <UnauthenticatedLayout>
      <form onSubmit={loginSubmitHandler} className="sm:bg-white flex flex-col justify-center items-center gap-6 sm:p-8 rounded-lg w-full sm:w-[450px]">
        <div className="w-full mb-4">
        <h4 className="text-3xl font-bold mb-2">Login</h4>
        <p className="font-extralight text-left">Add your details below to get back into the app</p>
        </div>
        <TextInput startIcon={<GrMail/>} placeholder="e.g. me@frontenddev.com" type="text" label="Email address"/> 
        <TextInput startIcon={<TiLockClosed className="text-xl"/>} placeholder="Enter your password" type="password" label="Password"/>
        <DarkButton type="submit" className="w-full">
          Login
        </DarkButton>
        <p className="font-extralight text-center">
          Don't have an account? <Link className="text-[#623dff]" to="/signup">Create account</Link>
        </p>       
    </form>
  </UnauthenticatedLayout>
  )
}

export default Login