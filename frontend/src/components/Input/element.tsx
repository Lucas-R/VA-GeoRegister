import { useFormContext } from "react-hook-form";
import { tv } from "tailwind-variants";

const input = tv({
    base: "w-full h-10 border border-stone-950/30 rounded-md px-4 py-2 focus:border-orange-500"
})

interface ElementProps extends React.HTMLAttributes<HTMLInputElement> {
    name: string
    rules?: {}
}

export default function Element({ name, rules, className }: ElementProps) {
    const { register } = useFormContext();
    
    return (
        <input
            className={input({ class: className })}
            id={name}
            {...register(name, rules)}
        />
    )
}