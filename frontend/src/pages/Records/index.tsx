import { Link, useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, Eye, SquarePen, Trash } from "lucide-react";
import { api } from "@utils/api";
import { VisitantSchema } from "@schemas/VisitantSchema";
import Title from "@components/Title";
import useFetch from "@hooks/useFetch";
import Container from "@components/Container";

export default function Records() {
    const navigate = useNavigate();
    const { data, isLoading, prev, next } = useFetch<VisitantSchema[]>({ method: "GET", path: "/visitant" });

    function handleDelete(id: string) {
        if (window.confirm('Tem certeza que deseja deletar este item?')) {
            try {
                api.delete(`/visitant/${id}`)
                .then(() => navigate("/registros"))
                .catch((err) => console.log(err));
            } catch (error) {
                console.log(error);
            }
        }
    }

    if(isLoading) return <p> Carregando... </p> 

    return (
        <Container className="min-h-full flex flex-col">
            <div>
                <Title size="h1"> Registros </Title>
            </div>
            <div className="grow">
                <div className="w-full grid grid-cols-4">
                    <p>Nome</p>
                    <p>Telefone</p>
                    <p>Bairro</p>
                    <p>Ações</p>
                </div>
                <ul>
                    <li>
                        {data?.result.map((visit: VisitantSchema) => {
                            const id = visit.id as string;
                            return (
                            <Link key={id} className="w-full grid grid-cols-4" to="/">
                                <p> {visit.name} </p>
                                <p> {visit.phone} </p>
                                <p> {visit.address.district} </p>
                                <div>
                                    <button><Eye /></button>
                                    <button><SquarePen /></button>
                                    <button onClick={() => handleDelete(id)}><Trash /></button>
                                </div>
                            </Link>
                            )
                        })}
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-center gap-x-4">
                <button onClick={prev} disabled={isLoading}><ChevronLeft /></button>
                <p>{ data?.page }</p>
                <button onClick={next} disabled={isLoading}><ChevronRight /></button>
            </div>
        </Container>
    )
}