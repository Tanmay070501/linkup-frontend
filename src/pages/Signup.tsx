import DarkButton from "../components/common/DarkButton"
import {GrMail} from "react-icons/gr";
import  {TiLockClosed} from "react-icons/ti"
import UnauthenticatedLayout from "../components/layouts/UnauthenticatedLayout";
import HighlightLink from "../components/common/HighlightLink";
import { singleFieldType } from "../components/common/FormBuilder/@types";
import { inputFieldType } from "../components/common/FormBuilder/constant";
import FormBuilder from "../components/common/FormBuilder/FormBuilder";
import { useFormik } from "formik";
import { useAppDispatch } from "../redux/hook";
import { AppDispatch } from "../redux/store";
import { signup } from "../redux/auth/action";
import { useState } from "react";

const signupFormConfig: Array<singleFieldType> = [
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
    placeholder: "Atleast 8 characters",
    inputFieldType: inputFieldType.text,
    keyIdentifier: "password",
    startIcon: <TiLockClosed/>
  },
  {
    type: "password",
    label: "Confirm Password",
    placeholder: "Atleast 8 characters",
    inputFieldType: inputFieldType.text,
    keyIdentifier: "confirmPassword",
    startIcon: <TiLockClosed/>
  },
]

interface SignupFormValues {
  email: string;
  password: string;
  confirmPassword: string
}

function Signup() {

    const dispatch:AppDispatch = useAppDispatch()
    const [loader, setLoader]  = useState(false)

    const formik = useFormik<SignupFormValues>({
      initialValues:{
        email: '',
        password: '',
        confirmPassword: ''
      },
      onSubmit: (values) => {
        // Handle form submission here
        console.log(values);
        dispatch(signup(values, setLoader))
      },
    });


  return (
    <UnauthenticatedLayout>
        <form onSubmit={formik.handleSubmit} className="sm:bg-white flex flex-col justify-center items-center gap-6 sm:p-8 rounded-lg w-full sm:w-[450px]">
        <div className="w-full mb-4">
        <h4 className="text-3xl font-bold mb-2">Create account</h4>
        <p className="font-extralight text-left">Let's get you started sharing your links!</p>
        </div>
        <FormBuilder
            formConfig={signupFormConfig}
            formik={formik}
        />
        <DarkButton type="submit" className="w-full" loading={loader}>
            Create new account
        </DarkButton>
        <p className="font-extralight text-center">
            Already have an account? <HighlightLink path="/login" label="Login" />
        </p>       
    </form>
    </UnauthenticatedLayout>
  )
}

export default Signup