import { Auth } from "@components/Auth";
import { createBrowserRouter } from "react-router";
import Register from "@pages/Register";
import Login from "@pages/Login";
import Users from "@pages/Users";
import Settings from "@pages/Settings";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Auth />,
        children: [
            {
                path: "/",
                element: <Register />,
            },
            {
                path: "/registros",
                element: <Users />,
            },
            {
                path: "/configuracoes",
                element: <Settings />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default Router;