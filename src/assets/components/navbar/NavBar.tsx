import { Basket, UserCircle } from "@phosphor-icons/react"

function Navbar() {

    return (
        <>
            <div className='w-full bg-cyan-600 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <div ><img className="w-1/2 " src="https://media.discordapp.net/attachments/1213109662677737511/1245346037259042838/a0zcXqK.png?ex=66586a60&is=665718e0&hm=22b621d47d6e0409eecdaaf8e589c6ed4f3748cb3f2a21216d196f0db4cb447b&=&format=webp&quality=lossless&width=432&height=165" alt="" /></div>

                    <div className='flex gap-4 items-center'>
                        <div className='hover:underline'>Categorias</div>
                        <div className='hover:underline'>Cadastrar Categorias</div>
                        <UserCircle size={32} />
                        <Basket size={32} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar