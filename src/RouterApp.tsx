import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import React, { Suspense } from "react"
import Loader from "./components/common/Loader";
import { useAppSelector } from "./redux/hook";
import { unauthenticatedRoutes } from "./routes";
import AuthenticatedPageLayout from "./components/layouts/AuthenticatedPageLayout";
const Login = React.lazy(() => import('./pages/Login'));
const UnauthenticatedPageLayout = React.lazy(() => import('./components/layouts/UnauthenticatedPageLayout'));
const Signup = React.lazy(() => import('./pages/Signup'));

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const unAuthenticatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <UnauthenticatedPageLayout/>,
    children: [
      {
        path: "",
        element: <Navigate to={unauthenticatedRoutes.LOGIN}/>
      },
      {
        path: unauthenticatedRoutes.LOGIN,
        element: <Login/>
      },
      {
        path: unauthenticatedRoutes.SIGNUP,
        element: <Signup/>
      },
      {
        path: '*',
        element: <Navigate to={unauthenticatedRoutes.LOGIN}/>
      }
    ]
  }
])

const authenticatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedPageLayout/>,
    children: [
      {
        path: "",
        element: <>Hi</>,
      },
      // {
      //   path: unauthenticatedRoutes.LOGIN,
      //   element: <Login/>
      // },
      // {
      //   path: unauthenticatedRoutes.SIGNUP,
      //   element: <Signup/>
      // },
      {
        path: '*',
        element: <Navigate to={"/"}/>
      }
    ]
  }
])

function RouterApp() {
  const accessToken = useAppSelector((state) => state.authReducer.accessToken)
  console.log("accessToken", accessToken)
  console.log(import.meta.env.VITE_BACKEND_BASE_URL)
  return (
    <Suspense
        fallback={<Loader/>}
    >
      <ToastContainer />
      <RouterProvider router={accessToken ? authenticatedRouter : unAuthenticatedRouter}/>
    </Suspense>
  )
}

export default RouterApp
