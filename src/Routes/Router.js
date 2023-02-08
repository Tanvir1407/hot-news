import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "category/:id",
                element: <Home></Home>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
            {

            }
        ]
    },
])