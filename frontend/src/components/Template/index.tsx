import Menu from "@components/Menu";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="w-full h-auto">
                <Menu />
            </div>
            <div className="grow overflow-y-auto">
                { children }
            </div>
        </div>
    )
}