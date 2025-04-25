import { DynamicIcon, IconName } from 'lucide-react/dynamic';
import { tv, VariantProps } from 'tailwind-variants';

const icon = tv({
    base: "size-5",
});

interface iconProps extends VariantProps<typeof icon> {
    name: IconName,
    strokeWidth?: number,
    className?: string
};

export default function Icon({ name, strokeWidth = 2, className }: iconProps) {
    return (
        <DynamicIcon strokeWidth={strokeWidth} name={name} className={icon({ class: className })}/>
    )
}