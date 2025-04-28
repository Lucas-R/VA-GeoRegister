export default function Error({ error }: { error?: any }) {
    if(!error) return null
    
    return (
        <p className="text-xs text-red-500 font-semibold mt-1"> { error.message } </p>
    )
}