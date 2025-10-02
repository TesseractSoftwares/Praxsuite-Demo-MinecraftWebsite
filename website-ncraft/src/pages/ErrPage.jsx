// import { useRouteError } from "react-router-dom";
import '../styles/error.css'
import NavbarWeb from '../components/NavbarWeb';

const ErrPage = () => {
    return (
            <header className="error-hero-bg h-100vh">
                <NavbarWeb />
                <section className="home-hero-content items-center grid h-100vh">
                    <div className="relative container mx-auto px-6 text-center">
                        <h1 className="mb-4 uppercase text-4xl font-bold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                            Error <span className="text-transparent bg-clip-text bg-gradient-to-r to-color1 from-color2">404</span>
                        </h1>
                        <p className="text-lg font-normal text-[#7776A8] md:w-full w-60 lg:text-xl sm:px-16 xl:px-60">
                            Lo sentimos, la página que buscas no existe...
                        </p>
                    </div>
                </section>
            </header>
    );
}

export default ErrPage;