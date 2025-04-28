interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Container({ children, ...rest }: ContainerProps) {
    return (
        <div className="w-full max-w-7xl m-auto" {...rest}>
            { children }
        </div>
    )
}