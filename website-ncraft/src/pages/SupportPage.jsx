import '../styles/styles.css'
import '../styles/support.css'
import img from '../img/mc-island.png'
import { HrefDiscord } from '../components/buttons/hrefdiscord';
import FooterComponent from '../components/FooterComponent';
import NavbarWeb from '../components/NavbarWeb';
import { useEffect } from 'react';

const SupportPage = () =>{
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavbarWeb />
            <header className="header-support">
                <div className='flex radial-bg2 flex-col translate-y-[-100px] animate-[appearDown_1s_ease-out_forwards] p-6 md:flex-row items-center justify-center h-100vh md:gap-20'>
                    <div className='md:mt-0 mt-16'>
                        <div className='h-full pacity-0'>
                            <p className='text-color1 h-12 bg-color1 bg-opacity-10 p-3 w-36 rounded-lg text-center mb-3 font-semibold'>Contactanos</p>
                            <p className='text-white mb-8 text-3xl md:text-5xl md:max-w-2xl font-bold'>Unete a nuestro servidor de <span className='text-color1'>Discord</span> para ayudarte a resolver tus dudas</p>
                            <HrefDiscord btnlabel={'Unirse al servidor'}/>
                        </div>
                    </div>
                    
                    <img className='md:max-w-lg md:p-8 p-5 max-w-full mt-10' src={img} alt="isla" />
                </div>
                <FooterComponent />
            </header>
        </>
    );
}

export default SupportPage;