import Menu from "@components/Menu";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Menu />
            { children }
        </>
    )
}