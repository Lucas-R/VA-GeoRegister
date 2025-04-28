import { useFormContext } from "react-hook-form";
import { tv, VariantProps } from "tailwind-variants"

const textarea = tv({
    base: "w-full h-auto resize-none border border-stone-950/30 rounded-md px-4 py-2 focus:border-orange-500"
})

interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textarea>{
    name: string
    rules?: {}
    rows?: number,
}

export default function Element({ name, rules, children, className, rows = 5, ...rest }: TextareaProps) {
    const { register } = useFormContext();
    
    return (
        <textarea 
            className={textarea({ class: className })} 
            rows={rows}
            {...register(name, rules)} 
            {...rest}
        >
            { children }
        </textarea>
    )
}