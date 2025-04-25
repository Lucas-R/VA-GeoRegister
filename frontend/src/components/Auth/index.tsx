import { useAuth } from "@clerk/clerk-react";
import Template from "@components/Template";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export function Auth() {
    const { isSignedIn, isLoaded } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoaded && !isSignedIn) navigate("/login");
    }, [isSignedIn, isLoaded]);

    if (!isLoaded) return <div>Carregando...</div>;
    
    if (!isSignedIn) return null;
    
    return (
        <Template>
            <Outlet />
        </Template>
    );

}