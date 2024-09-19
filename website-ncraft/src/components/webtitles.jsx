export const WebTitlesComponent = ({smalltitle, title}) => {
    return (
        <div className="minigames-titles w-50">
            <p class="text-base text-color1 dark:text-white mb-5">
                {smalltitle}
            </p>
            <h2 className="mb-12 text-2xl font-bold leading-none tracking-tight text-white md:text-3xl lg:text-3xl dark:text-white">
                {title}
            </h2>
        </div>
    );
} 