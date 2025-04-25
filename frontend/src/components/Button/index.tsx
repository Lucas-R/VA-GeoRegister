import { ButtonHTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
    base: "font-semibold uppercase",
    variants: {
        size: {
            sm: "py-1 px-2 rounded-sm",
            md: "py-2 px-4 rounded-md",
            lg: "py-4 px-6 rounded-lg"
        },
        theme: {
            primary: "bg-orange-500",
            default: "bg-white"
        }
    },
    defaultVariants: {
        size: "md",
        theme: "default"
    }
})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
    children: React.ReactNode
}

export default function Button({ children, className, size, theme, ...props }: ButtonProps) {
    return (
        <button className={button({ class: className, size, theme })} {...props}>{children}</button>
    )
}