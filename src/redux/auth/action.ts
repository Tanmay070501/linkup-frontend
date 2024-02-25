import axios, { AxiosError } from "axios"
import { AppDispatch } from "../store"
import { backendApiUrls } from "../../routes"
import { authActions } from "./auth"
import axiosInstance from "../../utils/axiosInstance"
import { toast } from "react-toastify"


export const login = (values:{
        email: string,
        password: string
    }, 
    loaderCallback?: (x: boolean) => void
) => {
    if(loaderCallback){
        loaderCallback(true)
    }
    return async (dispatch: AppDispatch) => {
        try{
            const res = await axios.post(backendApiUrls.LOGIN,values) 
            dispatch(authActions.login({
                accessToken: res.data.message
            }))

        }catch(err: any){
            toast.error(err.response.data.message || "Something went wrong!")
        } finally {
            if(loaderCallback){
                loaderCallback(false)
            }
        }
    }
}

export const signup = (values:{
    email: string,
    password: string
}, 
loaderCallback?: (x: boolean) => void,
callbackFn?: () => void
) => {
if(loaderCallback){
    loaderCallback(true)
}
return async (dispatch: AppDispatch) => {
    try{
        const res = await axios.post(backendApiUrls.SIGNUP,values) 
        
        toast.success(res.data.message)

        if(callbackFn){
            callbackFn()
        }
    }catch(err: any){
        toast.error(err.response.data.message || "Something went wrong!")
    } finally {
        if(loaderCallback){
            loaderCallback(false)
        }
    }
}
}


export const getUserDetails = (loaderCallback?: (x: boolean) => void, errorCallback?: () => void) => {
    if(loaderCallback){
        loaderCallback(true)
    }
    return async (dispatch: AppDispatch) => {
        try {
            const res = await axiosInstance.get(backendApiUrls.USER_DETAILS)
            console.log(res.data)
        } catch (error) {
            if(errorCallback){
                errorCallback()
            }
        } finally {
            if(loaderCallback){
                loaderCallback(false)
            }
        }
    }
}