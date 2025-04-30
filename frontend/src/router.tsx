import { Auth } from "@components/Auth";
import { createBrowserRouter } from "react-router";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Records from "@pages/Records";
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
                element: <Records />,
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