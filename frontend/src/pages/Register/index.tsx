import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import Title from "@components/Title";
import Input from "@components/Input";
import Button from "@components/Button";
import Textarea from "@components/Textarea";
import Container from "@components/Container";

export default function Register() {
    const methods = useForm();
    const { handleSubmit, formState: { errors } } = methods;
    const onSubmit: SubmitHandler<any> = data => console.log(data);

    return (
        <Container>
            <Title size="h1"> Novo cadastro </Title>
            <FormProvider {...methods}>
                <form className="flex flex-col gap-4 md:grid grid-cols-12" onSubmit={handleSubmit(onSubmit)}>
                    <Input.root className="md:col-span-6">
                        <Input.label name="name"> Nome: </Input.label>
                        <Input.input name="name" rules={{ required: "O nome é obrigatório" }}/>
                        <Input.error error={errors.name}/>
                    </Input.root>

                    <Input.root className="md:col-span-6">
                        <Input.label name="email"> E-mail: </Input.label>
                        <Input.input name="email" rules={{ required: "O e-mail é obrigatório" }}/>
                        <Input.error error={errors.email}/>
                    </Input.root>

                    <Input.root className="md:col-span-3">
                        <Input.label name="zipcode"> CEP: </Input.label>
                        <Input.input name="zipcode" rules={{ required: "CEP é obrigatório" }}/>
                        <Input.error error={errors.zipcode}/>
                    </Input.root>
                    
                    <Input.root className="md:col-span-7">
                        <Input.label name="address"> Endereço: </Input.label>
                        <Input.input name="address" rules={{ required: "Endereço é obrigatório" }}/>
                        <Input.error error={errors.address}/>
                    </Input.root>

                    <Input.root className="md:col-span-2">
                        <Input.label name="number"> Numero: </Input.label>
                        <Input.input name="number" rules={{ required: "Numero é obrigatório" }}/>
                        <Input.error error={errors.number}/>
                    </Input.root>

                    <Input.root className="md:col-span-4">
                        <Input.label name="district"> Bairro: </Input.label>
                        <Input.input name="district" rules={{ required: "Bairro é obrigatório" }}/>
                        <Input.error error={errors.district}/>
                    </Input.root>

                    <Input.root className="md:col-span-4">
                        <Input.label name="city"> Cidade: </Input.label>
                        <Input.input name="city" rules={{ required: "Cidade é obrigatório" }}/>
                        <Input.error error={errors.city}/>
                    </Input.root>

                    <Input.root className="md:col-span-4">
                        <Input.label name="state"> Estado: </Input.label>
                        <Input.input name="state" rules={{ required: "Estado é obrigatório" }}/>
                        <Input.error error={errors.state}/>
                    </Input.root>

                    <Textarea.root className="md:col-span-12">
                        <Textarea.label name="complement">Complemento:</Textarea.label>
                        <Textarea.textarea rows={3} name="complement" rules={{ required: "Complemento é obrigatório" }}/>
                        <Textarea.error error={errors.complement} />
                    </Textarea.root>

                    <Button className="md:col-start-9 md:col-span-4" theme="primary" type="submit">Enviar</Button>
                </form>
            </FormProvider>
        </Container>
    )
}