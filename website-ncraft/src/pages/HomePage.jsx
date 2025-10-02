
import '../styles/home.css';
import { GuideAccesss } from '../components/homeComponents/GuideAccess';
import { Leaderboard } from '../components/homeComponents/Leaderboard';
import FooterComponent from '../components/FooterComponent';
import { GalleryContent } from '../components/homeComponents/GalleryContent';
import NavbarWeb from '../components/NavbarWeb';
import { HrefGradient } from '../components/buttons/hrefgradient';
import { HreRegister } from '../components/buttons/hrefregister';
import { PintadillasImg } from '../components/homeComponents/PintadillasImg';
import { useEffect } from 'react';

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <header className="home-hero-bg h-100vh">
                <NavbarWeb />
                <section className="home-hero-content items-center grid h-100vh">
                    <div className="relative container mx-auto px-6 text-center pacity-0 translate-y-[-100px] animate-[appearDown_1s_ease-out_forwards]">
                        <h1 className="mb-4 uppercase text-4xl font-bold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                            Bienvenidos a <span className="text-transparent bg-clip-text bg-gradient-to-r to-color1 from-color2">NexusCraft</span>
                        </h1>
                        <p className="mb-10 text-lg font-normal text-white lg:text-base sm:px-16 xl:px-60 dark:text-gray-400">
                            Únete a nuestra comunidad y vive la emoción en nuestro gran minijuego. ¿Serás el mejor escondido o el mejor buscador? ¡La aventura comienza aquí!
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
                <PintadillasImg />
                <GuideAccesss />
                <Leaderboard />
                <GalleryContent />
            </main>
            <FooterComponent />
        </>
    );
}

export default HomePage;