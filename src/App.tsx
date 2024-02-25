import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
//import Login from "./components/Login"
//import Unauthenticated from "./pages/Unauthenticated"
//import Signup from "./components/Signup"
import React, { Suspense } from "react"
import Loader from "./components/common/Loader";
import { useAppSelector } from "./redux/hook";
const Login = React.lazy(() => import('./components/Login'));
const Unauthenticated = React.lazy(() => import('./pages/Unauthenticated'));
const Signup = React.lazy(() => import('./components/Signup'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Unauthenticated/>,
    children: [
      {
        path: "",
        element: <Navigate to={"login"}/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "signup",
        element: <Signup/>
      },
      {
        path: '*',
        element: <Navigate to={"login"}/>
      }
    ]
  }
])
function App() {
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

export default App
