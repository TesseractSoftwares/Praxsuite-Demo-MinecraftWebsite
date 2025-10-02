export const MainTitles = ({smalltitle, title}) => {
    return (
        <div className="minigames-titles autoShow text-center flex justify-center items-center flex-col md:w-[52rem]">
            <p className="text-lg text-color1 bg-[#2d1542] shadow-xl py-3 w-72 rounded-full mb-5 font-semibold">
                {smalltitle}
            </p>
            <h2 className="mb-12 text-3xl font-extrabold leading-none tracking-tight text-white md:text-4xl dark:text-white">
                {title}
            </h2>
        </div>
    );
} 