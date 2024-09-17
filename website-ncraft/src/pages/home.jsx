import { NavbarWeb } from "../components/navbar"
import '../styles/styles.css'

export const HomePage = () => {
    return (
        <>
            <header className="home-hero-bg h-100vh">
                <NavbarWeb/>
                <section className="home-hero-content items-center grid h-100vh">
                    <div className="relative container mx-auto px-6 text-center">
                        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">Bienvenidos a <span className="text-transparent bg-clip-text bg-gradient-to-r to-color1 from-color2">NexusCraft</span></h1>
                        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, modi totam? Est fuga provident temporibus nesciunt enim, tempore necessitatibus odio!</p>
                        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <a href="..." class="btn-gradient inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                ¡Jugar ahora!
                            </a>
                            <a href="..." class="btn-transparent py-3 px-5 sm:ms-8 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200">
                                ¡Registraste ahora!
                            </a>  
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
}