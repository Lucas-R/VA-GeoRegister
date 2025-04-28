import { tv, VariantProps } from "tailwind-variants"

const root = tv({
    base: "w-full h-auto flex flex-col",
});

interface RootProps extends React.HtmlHTMLAttributes<HTMLDivElement>, VariantProps<typeof root>{}

export default function Root({ children, className, ...rest }: RootProps) {
    return (
        <div className={root({ class: className })} {...rest}> {children} </div>
    )
}