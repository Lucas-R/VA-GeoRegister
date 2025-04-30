import { Link } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Title from "@components/Title";
import useFetch from "@hooks/useFetch";
import Container from "@components/Container";
import { VisitantSchema } from "@schemas/VisitantSchema";

export default function Records() {
    const { data, isLoading } = useFetch<VisitantSchema[]>({ method: "GET", url: "/visitant" });

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
                        {data?.map((visit: VisitantSchema) => {
                            return (
                            <Link className="w-full grid grid-cols-4" to="/">
                                <p> {visit.name} </p>
                                <p> {visit.phone} </p>
                                <p> {visit.address.district} </p>
                                <div>
                                    <button>a</button>
                                    <button>b</button>
                                    <button>c</button>
                                </div>
                            </Link>
                            )
                        })}
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-center gap-x-4">
                <button><ChevronLeft /></button>
                <p> 1 </p>
                <button><ChevronRight /></button>
            </div>
        </Container>
    )
}