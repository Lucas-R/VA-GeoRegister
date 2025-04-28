import { useAuth, useSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router";
import Button from "@components/Button";
import Brand from "../../assets/images/brand-white.png";

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
            <div className="w-full max-w-90 h-auto py-6 px-4 bg-stone-900/20 rounded-lg">
                <img className="w-32 m-auto mb-4" src={Brand} />
                <p className="text-sm text-white text-center mb-8">Sistema desenvolvido para controle de acesso de visitantes.</p>
                <Button className="w-full" size="lg" onClick={() => handleGoogle()}> Entrar com google </Button>
            </div>
        </div>
    )
}