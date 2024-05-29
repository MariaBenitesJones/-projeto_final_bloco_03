import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="bg-slate-300 min-h-[70vh] w-screen flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className=" flex flex-col items-center gap-4 justify-center py-4">
                        <h3 className="text-5xl font-bold">Farmácia Benites Jones</h3>
                        <p className="text-xl">No que podemos te ajudar?</p>
                        <div className="flex justify-around gap-4">
            <Link to={'/categorias'}><button className='rounded  bg-cyan-600 text-white py-2 px-4'>Categoria dos produtos</button></Link>
            </div>
            </div>

                    <div className="flex justify-center">
                        <img src="https://media.discordapp.net/attachments/1213109662677737511/1245346037493661777/HheNdw7.png?ex=66586a60&is=665718e0&hm=7641a1e64f7c1ec77ad1dc6a99ab952844b7bcead4fd781e6a636fcd7299a8b4&=&format=webp&quality=lossless&width=600&height=602" 
                        alt="Imagem da Pagina Home" 
                        className="w-2/3" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;