import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import User from "./pages/User"
import Admin from "./pages/Admin"


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>, 
        children: [ //children represents the routes
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/settings",
                element: <Settings/>
            },
            {
                path: "/user",
                element: <User/>
            },
            {
                path: "/admin",
                element: <Admin/>
            },
            {
                path: "*",
                element: "You don trabaye!!!"
            }
        ]
    }
])

export default router;