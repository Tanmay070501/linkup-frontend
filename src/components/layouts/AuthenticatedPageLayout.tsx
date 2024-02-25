import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hook'
import { AppDispatch } from '../../redux/store'
import { getUserDetails } from '../../redux/auth/action'
import Loader from '../common/Loader'
import { authActions } from '../../redux/auth/auth'
import Navbar from '../common/Navbar/Navbar'

function AuthenticatedPageLayout() {
    const dispatch: AppDispatch = useAppDispatch()
    const [loader, setLoader] = useState(false)
    React.useEffect(() => {
        const errorCb = () => {
            dispatch(authActions.logout())
        }
        dispatch(getUserDetails(setLoader, errorCb))
    }, [])

    return (
        <>
            {
                loader 
                ? 
                    <Loader/>
                : 
                <main className="min-h-screen px-6 pt-4 bg-gray-50">
                    <Navbar/>
                    <Outlet/>
                </main>
            }
        </>
    )
}

export default AuthenticatedPageLayout