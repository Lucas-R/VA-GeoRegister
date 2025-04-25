import React, { useState } from "react";
import { useClerk } from "@clerk/clerk-react";
import { IconName } from "lucide-react/dynamic";
import { Link, LinkProps } from "react-router";
import { tv } from "tailwind-variants";
import Icon from "@components/Icon";

const menuMobile = tv({
    base: "absolute top-0 w-full h-screen bg-white transiton duration-300 ease-in-out sm:hidden",
    variants: {
        isOpen: {
            true: "left-0",
            false: "-left-full"
        } 
    },
    defaultVariants: {
        isOpen: false
    }
});

interface OptionProps extends LinkProps{
    children: React.ReactNode,
    icon: IconName
}

function Option({ children, icon, ...rest }: OptionProps) {
    return (
        <Link className="w-full h-12 px-6 flex items-center gap-x-2 border-b border-stone-900/20 sm:hover:text-orange-500 sm:hover:underline sm:text-xs sm:uppercase sm:border-0 sm:px-0 sm:w-auto sm:h-auto" {...rest}>
            <Icon className="sm:hidden" name={icon}/>{ children }
        </Link>
    )
}

function Options() {
    const { signOut, session } = useClerk();

    async function handleSignOut() {
        const sessionId = session?.id as string;
        await signOut({ sessionId });
    }

    return (
        <>
            <Option to="/" icon="circle-plus">Novo cadastro</Option>
            <Option to="/usuarios" icon="book-user">Registros</Option>
            <Option to="/configuracoes" icon="settings">Configurações</Option>
            <button
                onClick={() => handleSignOut()} 
                className="w-full h-10 px-6 flex items-center justify-center  gap-x-2 text-white bg-red-500 sm:hover:text-orange-500 sm:text-xs sm:uppercase sm:px-0 sm:w-auto sm:h-auto sm:bg-white sm:text-black"
            >
                Sair<Icon name="log-out" className="size-4"/>
            </button>
        </>
    )
}

export default function Menu() {
    const [open, setOpen] = useState(false);

    function handleMenu() {
        setOpen(prev => !prev);
    }

    return (
        <div className="relative w-full h-20 px-6 flex items-center justify-between border-b border-stone-900/10">
            <Link to="/">VA Group</Link>
            <button className="sm:hidden" onClick={handleMenu}><Icon className="size-7" name="menu"/></button>

            <nav className={menuMobile({ isOpen: open })}>
                <div className="w-full h-20 px-6 flex items-center justify-between border-b border-stone-900/10">
                    <p>Menu</p>
                    <button onClick={handleMenu}><Icon className="size-7" name="x-circle"/></button>
                </div>
                <div className="flex flex-col">
                    <Options />
                </div>
            </nav>

            <nav className="hidden sm:flex gap-x-4">
                <Options />
            </nav>
        </div>
    )
}
