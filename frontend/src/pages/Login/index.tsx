import { useAuth, useSignIn } from "@clerk/clerk-react";
import Button from "@components/Button";
import Title from "@components/Title";
import { useNavigate } from "react-router";

export default function Login() {
    const { signIn } = useSignIn();
    const { isSignedIn } = useAuth();
    const navigate = useNavigate();

    if(!!isSignedIn) navigate("/");

    async function handleGoogle() {
        try {
            await signIn?.authenticateWithRedirect({
                strategy: "oauth_google",
                redirectUrl: "/",
                redirectUrlComplete: "/",
            });
        } catch (err) {
            console.error("Erro ao fazer login com Google:", err);
        }
    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-linear-65 from-red-500 to-orange-500">
            <div className="w-full max-w-80 h-auto py-6 px-4 bg-stone-900/20 rounded-lg">
                <Title className="text-center text-white font-light mb-2" size="h1">VA Group</Title>
                <p className="text-sm text-white text-center mb-6">Sistema desenvolvido para controle de acesso de visitantes.</p>
                <Button className="w-full" size="lg" onClick={() => handleGoogle()}> Entrar com google </Button>
            </div>
        </div>
    )
}