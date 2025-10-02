export const GuideAccessCard = ({icon, step, title, tbutton, bg}) => {
    return (
        <div className={`max-w-sm px-9 py-10 ${bg} rounded-xl shadow`}>
            <div className="flex justify-center items-center mb-5">
                <img className="rounded-full p-4 max-w-28 bg-color5" src={icon} alt="" />
            </div>
            <div>
                <h5 className="mb-8 text-2xl font-bold tracking-tight text-white dark:text-white">
                    <span className="text-color1">{step}</span> {title}
                </h5>
                {tbutton}
            </div>
        </div>
    );
}