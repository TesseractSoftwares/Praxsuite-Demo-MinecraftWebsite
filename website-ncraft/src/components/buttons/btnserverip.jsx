

export const BtnServerIp = () => {
    const textToCopy = "Próximamente"; // IP servidor

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
    };

    return (
        <div className="flex items-center justify-center py-2 bg-color3 rounded">
            <p className="mr-4 text-white">{textToCopy}</p>
            <button
                onClick={handleCopy}
                className="px-4 py-2 hover:duration-300 duration-300 text-white btn-gradient hover:scale-[109%] transition hover:transition"
            >
                Copiar
            </button>
        </div>
    );
}