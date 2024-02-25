import DarkButton from "../components/common/DarkButton";
import {GrMail} from "react-icons/gr";
import  {TiLockClosed} from "react-icons/ti"
import UnauthenticatedLayout from "../components/layouts/UnauthenticatedLayout";
import { singleFieldType } from "../components/common/FormBuilder/@types";
import { inputFieldType } from "../components/common/FormBuilder/constant";
import FormBuilder from "../components/common/FormBuilder/FormBuilder";
import HighlightLink from "../components/common/HighlightLink";
import { useFormik } from "formik";

interface LoginFormValues {
    email: string,
    password: string
}

const loginFormConfig: Array<singleFieldType> = [
    {
      type: "email",
      label: "Email address",
      placeholder: "e.g. me@frontenddev.com",
      inputFieldType: inputFieldType.text,
      keyIdentifier: "email",
      startIcon: <GrMail/>
    },
    {
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      inputFieldType: inputFieldType.text,
      keyIdentifier: "password",
      startIcon: <TiLockClosed/>
    },
]

function Login() {

  const formik = useFormik<LoginFormValues>({
    initialValues:{
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  
  return (
    <UnauthenticatedLayout>
      <form onSubmit={formik.handleSubmit} className="sm:bg-white flex flex-col justify-center items-center gap-6 sm:p-8 rounded-lg w-full sm:w-[450px]">
        <div className="w-full mb-4">
        <h4 className="text-3xl font-bold mb-2">Login</h4>
        <p className="font-extralight text-left">Add your details below to get back into the app</p>
        </div>
        <FormBuilder
            formConfig={loginFormConfig}
            formik={formik}
        />
        {/* <TextInput startIcon={<GrMail/>} placeholder="e.g. me@frontenddev.com" type="text" label="Email address"/> 
        <TextInput startIcon={<TiLockClosed/>} placeholder="Enter your password" type="password" label="Password"/> */}
        <DarkButton type="submit" className="w-full">
          Login
        </DarkButton>
        <p className="font-extralight text-center">
          Don't have an account? <HighlightLink path={"/signup"} label="Create account"/>
        </p>       
    </form>
  </UnauthenticatedLayout>
  )
}

export default Login