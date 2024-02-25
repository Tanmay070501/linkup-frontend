import { string } from "yup"

export enum unauthenticatedRoutes {
    LOGIN = "/login",
    SIGNUP = "/signup"
}

export const backendBaseUrl = `${import.meta.env.VITE_BACKEND_BASE_URL}`

type backendApiUrlsType = {
    LOGIN: string,
    SIGNUP: string,
    USER_DETAILS: string
}

const authBackendApiUrl = `${backendBaseUrl}/auth`

export const backendApiUrls: backendApiUrlsType =  {
    LOGIN : `${authBackendApiUrl}/login/`,
    SIGNUP: `${authBackendApiUrl}/signup/`,
    USER_DETAILS: `${authBackendApiUrl}/user_details/`
}