import { Link } from "react-router-dom"
import DarkButton from "./common/DarkButton"
import TextInput from "./common/TextInput"
import React from "react"
import {GrMail} from "react-icons/gr";
import  {TiLockClosed} from "react-icons/ti"
import UnauthenticatedLayout from "./layouts/UnauthenticatedLayout";
function Signup() {
    const signupFormHandler = (e:React.FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
    }
  return (
    <UnauthenticatedLayout>
        <form onSubmit={signupFormHandler} className="sm:bg-white flex flex-col justify-center items-center gap-6 sm:p-8 rounded-lg w-full sm:w-[450px]">
        <div className="w-full mb-4">
        <h4 className="text-3xl font-bold mb-2">Create account</h4>
        <p className="font-extralight text-left">Let's get you started sharing your links!</p>
        </div>
        <TextInput startIcon={<GrMail/>} placeholder="e.g. me@frontenddev.com" type="text" label="Email address"/> 
        <TextInput startIcon={<TiLockClosed className="text-xl"/>} placeholder="Atleast 8 characters" type="password" label="Password"/>
        <TextInput startIcon={<TiLockClosed className="text-xl"/>} placeholder="Atleast 8 characters" type="password" label="Confirm password"/>
        <DarkButton type="submit" className="w-full">
            Create new account
        </DarkButton>
        <p className="font-extralight text-center">
        Already have an account? <Link className="text-[#623dff]" to="/login">Login</Link>
        </p>       
    </form>
    </UnauthenticatedLayout>
  )
}

export default Signup