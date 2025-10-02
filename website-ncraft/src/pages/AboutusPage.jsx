
import '../styles/aboutus.css';
import { NexusTeam } from '../components/aboutusComponents/NexusTeam';
import FooterComponent from '../components/FooterComponent';
import NavbarWeb from '../components/NavbarWeb';
import { HrefGradient } from '../components/buttons/hrefgradient';
import { HreRegister } from '../components/buttons/hrefregister';
import { useEffect } from 'react';
import Logo from '../img/NexusCraftLogo.png';

const AboutusPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <header className="aboutus-hero-bg h-100vh">
                <NavbarWeb />
                <section className="home-hero-content items-center grid h-100vh">
                    <div className="relative container mx-auto px-6 text-center pacity-0 translate-y-[-100px] animate-[appearDown_1s_ease-out_forwards]">
                        <div className="flex items-center justify-center mb-3">
                            <img src={Logo} className="h-28 hover:duration-300 duration-300 hover:scale-[109%] transition hover:transition" alt="NexusCraft" />
                        </div>
                        <h1 className="mb-4 uppercase text-4xl font-bold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                            Nexus Creators 
                        </h1>
                        {/* <h1 className="mb-4 uppercase text-4xl font-bold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                            Bienvenidos a <span className="text-transparent bg-clip-text bg-gradient-to-r to-color1 from-color2">NexusCraft</span>
                        </h1> */}
                        <p className="mb-10 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-60 dark:text-gray-400">
                            Conoce al equipo detrás de la creación de NexusCraft.
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
            <main>
   
                <NexusTeam />
                
            </main>
            <FooterComponent />
        </>
    );
}

export default AboutusPage;