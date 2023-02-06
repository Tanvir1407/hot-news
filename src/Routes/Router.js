import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import News from "../Pages/News/News";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "category/:id",
                element: <News></News>
            }
        ]
    },
])