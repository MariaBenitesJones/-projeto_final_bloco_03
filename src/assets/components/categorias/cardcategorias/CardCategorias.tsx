import { Link } from 'react-router-dom'
import Categoria from '../../../../models/Categoria'

interface CardCategoriasProps {
categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className='border flex flex-col rounded-2xl mt-8 m-5 overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-slate-400 text-white font-bold text-2xl'>
                Categoria
            </header>
            <div className='p-4 text-center text-xl font-semibold'>
                <p>{categoria.nome}</p>
            </div>
            <div className="flex">
                <Link to={`/editarCategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-cyan-500 hover:bg-cyan-600 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarCategoria/${categoria.id}`}
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
		                        flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias