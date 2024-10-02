import img from '../../../img/mc-island.png'
import Logo from '../../../img/NexusCraftLogo.png';
import { HrefDiscord } from '../../../components/buttons/hrefdiscord';

export const SupportContent= ()=>{
    return(
        <header className="header-support">
            <div className='flex flex-col p-5 md:flex-row items-center justify-center h-100vh md:gap-20'>
                <div className='mb-10'>
                    <div className='h-full'>
                        <a href="/" className="flex items-center">
                            <img src={Logo} className="h-16 mb-10" alt="NexusCraft" />
                        </a>
                        <p className='text-color1 h-12'>Contactanos</p>
                        <p className='text-white mb-10 text-3xl md:text-5xl md:max-w-2xl font-bold'>Unete a nuestro servidor de <span className='text-color1'>Discord</span> para ayudarte a resolver tus dudas</p>
                        <HrefDiscord btnlabel={'Unirse al servidor'}/>
                    </div>
                </div>
                
                <img className='md:max-w-lg md:p-8 p-5 max-w-full' src={img} alt="isla" />
            </div>
        </header>
    );
}