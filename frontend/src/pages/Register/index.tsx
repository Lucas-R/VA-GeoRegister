import { api } from "@utils/api";
import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import Title from "@components/Title";
import Input from "@components/Input";
import Button from "@components/Button";
import Textarea from "@components/Textarea";
import Container from "@components/Container";
import AlertMessage from "@components/AlertMessage";

interface RegisterPayloudProps {
    address: string
    district: string
    city: string
    region: string
    zipcode: string
    country: string
    complement: string
    name: string
    phone: string
}

export default function Register() {
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
                address: {
                    adressLine: payload.address,
                    district: payload.district,
                    city: payload.city,
                    region: payload.region,
                    zipcode: payload.zipcode,
                    country: payload.country,
                    complement: payload.complement
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
                <Title size="h1"> Novo cadastro </Title>
                <FormProvider {...methods}>
                    <form className="flex flex-col gap-4 md:grid grid-cols-12" onSubmit={handleSubmit(onSubmit)}>
                        <Input.root className="md:col-span-6">
                            <Input.label name="name"> Nome: </Input.label>
                            <Input.input name="name" rules={{ required: "O nome é obrigatório" }} autocomplete="on"/>
                            <Input.error error={errors.name}/>
                        </Input.root>

                        <Input.root className="md:col-span-6">
                            <Input.label name="phone"> Contato: </Input.label>
                            <Input.input name="phone" rules={{ required: "O telefone é obrigatório" }} autocomplete="on"/>
                            <Input.error error={errors.phone}/>
                        </Input.root>

                        <Input.root className="md:col-span-3">
                            <Input.label name="zipcode"> CEP: </Input.label>
                            <Input.input name="zipcode" autocomplete="on"/>
                            <Input.error error={errors.zipcode}/>
                        </Input.root>
                        
                        <Input.root className="md:col-span-7">
                            <Input.label name="address"> Endereço: </Input.label>
                            <Input.input name="address" autocomplete="on"/>
                            <Input.error error={errors.address}/>
                        </Input.root>

                        <Input.root className="md:col-span-2">
                            <Input.label name="number"> Numero: </Input.label>
                            <Input.input name="number" autocomplete="on"/>
                            <Input.error error={errors.number}/>
                        </Input.root>

                        <Input.root className="md:col-span-4">
                            <Input.label name="district"> Bairro: </Input.label>
                            <Input.input name="district" rules={{ required: "Bairro é obrigatório" }} autocomplete="on"/>
                            <Input.error error={errors.district}/>
                        </Input.root>

                        <Input.root className="md:col-span-4">
                            <Input.label name="city"> Cidade: </Input.label>
                            <Input.input name="city" autocomplete="on"/>
                            <Input.error error={errors.city}/>
                        </Input.root>

                        <Input.root className="md:col-span-4">
                            <Input.label name="state"> Estado: </Input.label>
                            <Input.input name="state" autocomplete="on"/>
                            <Input.error error={errors.state}/>
                        </Input.root>

                        <Textarea.root className="md:col-span-12">
                            <Textarea.label name="complement">Complemento:</Textarea.label>
                            <Textarea.textarea rows={3} name="complement" />
                            <Textarea.error error={errors.complement} />
                        </Textarea.root>

                        <Button 
                            className="md:col-start-5 md:col-span-4" 
                            theme="danger"
                            type="button"
                            onClick={reset}
                        >Limpar</Button>
                        <Button className="md:col-start-9 md:col-span-4" theme="primary" type="submit">Enviar</Button>
                    </form>
                </FormProvider>
            </Container>
        </>
    )
}