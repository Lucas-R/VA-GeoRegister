import { tv, VariantProps } from "tailwind-variants";

const alert = tv({
    base: "absolute bottom-4 left-4 rounded-md min-w-20 py-3.5 px-6",
    variants: {
        theme: {
            danger: "bg-red-600/80",
            success: "bg-emerald-500"
        },
    },
    defaultVariants: {
        theme: "success",
        active: false
    }
});

interface AlertMessageProps extends VariantProps<typeof alert>{
    message: string
}

export default function AlertMessage({ theme, message }: AlertMessageProps) {
    return (
        <div className={alert({ theme })}>
            <p className="text-sm text-white">{ message }</p>
        </div>
    )
}