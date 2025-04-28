import { tv, VariantProps } from "tailwind-variants";

const title = tv({
    slots: {
        heading1: "text-[44px] md:text-5xl mb-4",
        heading2: "text-[40px] md:text-4xl mb-4",
        heading3: "text-[36px] md:text-3xl mb-4",
        heading4: "text-[32px] md:text-2xl mb-4",
        heading5: "text-[28px] md:text-xl mb-4",
        heading6: "text-[24px] md:text-xl mb-4",
    },
    variants: {
        theme: {
            default: "text-red-500"
        }
    }
})

interface TitleProps extends VariantProps<typeof title> {
    size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    children: React.ReactNode | string,
    className?: string
}

export default function Title({ size, className, children }: TitleProps) {
    const { heading1, heading2, heading3, heading4, heading5, heading6 } = title();

    switch (size) {
        case "h1":
            return <h1 className={heading1({ class: className })}>{ children }</h1>;
    
        case "h2":
            return <h2 className={heading2({ class: className })}>{ children }</h2>;

        case "h3":
            return <h3 className={heading3({ class: className })}>{ children }</h3>;

        case "h4":
            return <h4 className={heading4({ class: className })}>{ children }</h4>;

        case "h5":
            return <h5 className={heading5({ class: className })}>{ children }</h5>;

        case "h6":
            return <h6 className={heading6({ class: className })}>{ children }</h6>;

        default:
            return <p className="text-base">{ children }</p>;
    }
}