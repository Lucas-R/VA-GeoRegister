import Menu from "@components/Menu";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Menu />
            <div className="py-6 px-6">
                { children }
            </div>
        </>
    )
}