import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormCategoria() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert('Categoria não encontrada!')
            retornar();
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)

                alert('Categoria atualizado com sucesso')

            } catch (error: any) {
                alert('Erro ao atualizar o Categoria')
            }

        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)

                alert('Categoria cadastrada com sucesso')

            } catch (error: any) {
                alert('Erro ao cadastrar a Categoria')
            }
        }

        setIsLoading(false)
        retornar();

    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className="container min-h-[70vh] flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-6">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-6"
                onSubmit={gerarNovaCategoria}
            >
                <div className="flex flex-col gap-2 ">
                    <label htmlFor="categoria">Categoria</label>
                    <input
                        type="text"
                        placeholder="Categoria"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2 utral-800"
                        required
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-slate-400 
                 hover:bg-cyan-600 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;