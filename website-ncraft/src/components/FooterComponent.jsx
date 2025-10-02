import { Link } from 'react-router-dom';
import Logo from '../img/NexusCraftLogo.png';
import { HrefDiscord } from './buttons/hrefdiscord';
import { HreRegister } from './buttons/hrefregister';

const FooterComponent = () => {
    return (
        <footer className="bg-color5 text-white">
            <div className="mx-auto w-full max-w-screen-xl p-6 py-6 md:py-0">
                <div className="md:flex md:justify-between w-full md:pt-16">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img src={Logo} className="h-24 me-3 hover:duration-300 duration-300 hover:scale-[109%] transition hover:transition" alt="" />
                        </Link>
                    </div>
                    <div className='mt-8 md:mt-0'> 
                        <h2 className="mb-3 text-xl font-extrabold text-white">Acceso rápido</h2>
                            <ul className="text-color3 flex md:flex-row flex-col md:gap-8 gap-3">
                                <li className="mb-4 footer-link">
                                    <Link to="/" className="hover:underline">Hogar</Link>
                                </li>
                                <li className="mb-4 footer-link">
                                    <Link to="/aboutus" className="hover:underline">Nosotros</Link>
                                </li>
                                <li className="mb-4 footer-link">
                                    <Link to="/support" className="hover:underline">Soporte</Link>
                                </li>
                            </ul>
                    </div>
                    <div className='mt-8 md:mt-0'>
                            <h2 className="mb-5 text-xl font-extrabold text-white">¿No tienes una cuenta?</h2>
                            <div className="text-white flex md:flex-row flex-col gap-5">            
                                <div>
                                    <HrefDiscord btnlabel={'Próximamente'}/>
                                </div>                   
                                <div className="mb-4">
                                    <HreRegister btnlabel={'Próximamente!'}/>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="">
                    <p className='font-thin mt-4 text-center border-t border-color3 py-8'>Designed by NexusCreators in <a href="https://www.tesseractsoftwares.com/" className='text-[#FFA400] hover:underline'>Tesseract</a> 🚀</p>
                </div>
            
            </div>
        </footer>

    );
}

export default FooterComponent;