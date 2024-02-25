import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import React, { Suspense } from "react"
import Loader from "./components/common/Loader";
import { useAppSelector } from "./redux/hook";
import { unauthenticatedRoutes } from "./routes";
const Login = React.lazy(() => import('./pages/Login'));
const UnauthenticatedPageLayout = React.lazy(() => import('./components/layouts/UnauthenticatedPageLayout'));
const Signup = React.lazy(() => import('./pages/Signup'));
const router = createBrowserRouter([
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
function RouterApp() {
  const accessToken = useAppSelector((state) => state.authReducer.accessToken)
  console.log("accessToken", accessToken)

  return (
    <Suspense
        fallback={<Loader/>}
    >
      <RouterProvider router={router}/>
    </Suspense>
  )
}

export default RouterApp
