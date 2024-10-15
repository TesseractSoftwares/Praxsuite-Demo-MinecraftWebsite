import { NavbarWeb } from "../../../components/navbar";
import { HrefGradient } from "../../../components/buttons/hrefgradient";
import { HreRegister } from "../../../components/buttons/hrefregister";

export const Header = () => {
    return (
            <header className="home-hero-bg h-100vh">
                <NavbarWeb />
                <section className="home-hero-content items-center grid h-100vh">
                    <div className="relative container mx-auto px-6 text-center">
                        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                            Bienvenidos a <span className="text-transparent bg-clip-text bg-gradient-to-r to-color1 from-color2">NexusCraft</span>
                        </h1>
                        <p className="mb-10 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-60 dark:text-gray-400">
                            Entra a nuestro servidor de Minecraft y vive la emoción en nuestro gran minijuego. ¿Serás el mejor escondido o el mejor buscador? ¡La aventura comienza aquí!
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <HrefGradient href={'/'} btnlabel={'Próximamente'}/>
                                <HreRegister btnlabel={'Próximamente'} />  
                            </div>
                        </div>
                    </div>
                </section>
            </header>
    );
}