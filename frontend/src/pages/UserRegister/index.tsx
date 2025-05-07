import { api } from "@utils/api";
import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import Title from "@components/Title";
import Input from "@components/Input";
import Button from "@components/Button";
import Container from "@components/Container";
import AlertMessage from "@components/AlertMessage";

interface RegisterPayloudProps {
    district: string
    name: string
    phone: string
}

export default function UserRegister() {
    const [error, setError] = useState(false);
    const [duplicate, setDuplicate] = useState(false);
    const [success, setSuccess] = useState(false);
    const methods = useForm();
    const { handleSubmit, reset, formState: { errors } } = methods;
    const onSubmit: SubmitHandler<any> = (payload: RegisterPayloudProps) => {
        api({
            method: "POST",
            url: "/visitant",
            data: {
                name: payload.name,
                phone: payload.phone,
                by: "Default",
                address: {
                    district: payload.district
                }
            }
        })
        .then(() => {
            handleSuccess();
            reset();
        })
        .catch(err => {
            if(err.status === 409) {
                handleDuplicate();
            } else {
                handleError();
            }
        });
    };

    function handleDuplicate() {
        setDuplicate(true);
        setTimeout(() => {
            setDuplicate(false);
        }, 10000);
    }
    
    function handleError() {
        setError(true);
        setTimeout(() => {
            setError(false);
        }, 10000);
    }

    function handleSuccess() {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 10000);
    }

    return (
        <>
            {error && <AlertMessage theme="danger" message="Error, contactar o administrador."/>}
            {duplicate && <AlertMessage theme="danger" message="Usuário já cadastrado."/>}
            {success && <AlertMessage theme="success" message="Usuário cadastrado com sucesso."/>}
            <Container>
                <Title className="mb-10" size="h1"> Novo cadastro </Title>
                <FormProvider {...methods}>
                    <form className="max-w-3xl mx-auto flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                        <Input.root>
                            <Input.label name="name"> Nome: </Input.label>
                            <Input.input name="name" rules={{ required: "O nome é obrigatório" }} autocomplete="on"/>
                            <Input.error error={errors.name}/>
                        </Input.root>

                        <Input.root>
                            <Input.label name="phone"> Contato: </Input.label>
                            <Input.input name="phone" rules={{ required: "O telefone é obrigatório" }} autocomplete="on"/>
                            <Input.error error={errors.phone}/>
                        </Input.root>

                        <Input.root>
                            <Input.label name="district"> Bairro: </Input.label>
                            <Input.input name="district" rules={{ required: "Bairro é obrigatório" }} autocomplete="on"/>
                            <Input.error error={errors.district}/>
                        </Input.root>

                        <Button 
                            theme="danger"
                            type="button"
                            onClick={reset}
                        >Limpar</Button>
                        <Button 
                            theme="primary" 
                            type="submit"
                        >Enviar</Button>
                    </form>
                </FormProvider>
            </Container>
        </>
    )
}