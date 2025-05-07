import { Auth } from "@components/Auth";
import { createBrowserRouter } from "react-router";
import Login from "@pages/Login";
import UserRegister from "@pages/UserRegister";
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
    {
        path: "/cadastrar",
        element: <UserRegister />,
    }
]);

export default Router;