import { useState } from 'react';
import Logo from '../img/NexusCraftLogo.png';
import '../styles/styles.css';

export const NavbarWeb = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="dark:bg-gray-900 fixed w-full z-20 top-0 start-0 dark:border-gray-600" id='targetEl'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <img src={Logo} className="h-14" alt="NexusCraft" />
                </a>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a href='/login' type="button" className="text-white btn-gradient font-medium rounded-lg text-sm px-4 py-3 text-center flex items-center">Próximamente</a>
                    <button onClick={toggleMenu} data-collapse-toggle="navbar-cta" id='triggerEl' type="button" className="focus:ring-2 focus:ring-gray-20 focus:ring-gray-800 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" className="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent md:hover:text-color1" aria-current="page">Hogar</a>
                        </li>
                        <li>
                            <a href="/soon" className="block py-2 px-3 md:p-0 text-white rounded md:hover:bg-transparent md:hover:text-color1 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Nosotros</a>
                        </li>
                        <li>
                            <a href="/soon" className="block py-2 px-3 md:p-0 text-white rounded md:hover:bg-transparent md:hover:text-color1 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Soporte</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}