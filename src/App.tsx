import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
//import Login from "./components/Login"
//import Unauthenticated from "./pages/Unauthenticated"
//import Signup from "./components/Signup"
import React, { Suspense } from "react"
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
  return (
    <Suspense
             fallback={<div><p>Loading...</p></div>}
        >
      <RouterProvider router={router}/>
      </Suspense>
  )
}

export default App
