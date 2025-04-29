import { tv, VariantProps } from "tailwind-variants"

const container = tv({
    base: "w-full max-w-7xl m-auto p-6"
});

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof container> {}

export default function Container({ children, className, ...rest }: ContainerProps) {
    return (
        <div className={container({ class: className })} {...rest}>
            { children }
        </div>
    )
}