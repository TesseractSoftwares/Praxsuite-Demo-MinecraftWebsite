import Logo from '../img/NexusCraftLogo.png';
import { HrefDiscord } from './buttons/hrefdiscord';
import { HreRegister } from './buttons/hrefregister';

export const Footer = () => {
    return (
        <footer className="bg-color5 mt-20 text-white">
            <div className="mx-auto w-full max-w-screen-xl p-6 py-6 lg:py-12">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img src={Logo} className="h-20 me-3" alt="" />
                        </a>
                        <p className='md:w-96 font-thin mt-5'>Divierte con tus amigos jugando en NexusCraft, compite con la comunidad y consigue grandes recompensas como cosmeticos, mascotas y mucho más. </p>
                        <div className="d-btn my-5 mb-10">
                            <HrefDiscord btnlabel={'Próximamente'}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-5 text-base font-semibold text-white dark:text-white">Acceso rápido</h2>
                            <ul className="text-color3">
                                <li className="mb-4 footer-link">
                                    <a href="/" className="hover:underline">Hogar</a>
                                </li>
                                <li className="mb-4 footer-link">
                                    <a href="/" className="hover:underline">Nosotros</a>
                                </li>
                                <li className="mb-4 footer-link">
                                    <a href="/" className="hover:underline">Soporte</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-8 text-base font-semibold text-white dark:text-white">¿No tienes una cuenta?</h2>
                            <ul className="text-white">                               
                                <li className="mb-4">
                                    <HreRegister btnlabel={'Próximamente!'}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
            </div>
        </footer>

    );
}