interface LabelProps {
    name: string
    children: React.ReactNode
}

export default function Label({ name, children }: LabelProps) {
    return (
        <label
            className="text-sm font-normal mb-1" 
            htmlFor={name}
        >
                { children }
        </label>
    )
}