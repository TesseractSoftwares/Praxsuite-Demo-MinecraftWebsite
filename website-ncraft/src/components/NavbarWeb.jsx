import { useState, useEffect, useRef } from 'react';
import Logo from '../img/NexusCraftLogo.png';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useNavigate } from 'react-router-dom';
import UserAuth from '../utils/UserAuth';

// import { useAuth } from "../utils/AuthProvider";

const NavbarWeb = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const user = UserAuth();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpenDropdown(false);
            };
        };
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => { 
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        navigate('/');
    };

    return (
        <nav className="bg-black bg-opacity-60 fixed w-full z-20 top-0 start-0" id='targetEl'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <Link to="/" className="flex items-center">
                    <img src={Logo} className="h-16 hover:duration-300 duration-300 hover:scale-[109%] transition hover:transition" alt="NexusCraft" />
                </Link>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {
                        !user ? (
                            <Link to='/login' type="button" className="text-white hover:duration-300 duration-300 hover:scale-[109%] transition hover:transition btn-gradient font-medium rounded-lg text-sm py-4 px-6 text-center md:flex hidden items-center">Próximamente</Link>
                        ) : (
                            <div className="flex" ref={dropdownRef}>
                                <div onClick={toggleDropdown} className="bg-white relative rounded-lg md:w-12 md:h-12 w-10 h-10 cursor-pointer">
                                    <img src={`https://minotar.net/avatar/${user?.username}/80`} alt="n1" className="object-cover rounded-lg hover:duration-300 duration-300 hover:scale-[107%] transition hover:transition" />
                                
                                    {
                                        isOpenDropdown && (
                                            <div className="absolute -translate-x-36 translate-y-6 md:right-auto transition duration-300 bg-black border-t border-color3 py-3 px-4 bg-opacity-90 w-auto rounded-b-lg flex flex-col">
                                                <div className="mb-3">
                                                    <p className='text-white'>{user?.username}</p>
                                                    <p className='footer-link text-color1'>{user?.email}</p>
                                                </div>
                                                <strong className='w-48 h-[1px] bg-[#7776A8] mb-3'></strong>
                                                <div className="mb-0">
                                                    <ul className='space-y-2'>
                                                        <li>
                                                            <Link to={'/profile'} className='text-white text-sm md:hover:text-color1 transition hover:transition'>Mi Perfil</Link>
                                                        </li>
                                                        <li>
                                                            <Link to={'/config'} className='text-white text-sm md:hover:text-color1 transition hover:transition'>Configuración</Link>
                                                        </li>
                                                        <li>
                                                            <button onClick={handleLogout} className='text-white text-sm md:hover:text-red-500 transition hover:transition'>Cerrar sesión</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                    <button onClick={toggleMenu} data-collapse-toggle="navbar-cta" id='triggerEl' type="button" className="focus:ring-2 focus:ring-gray-20 focus:ring-gray-800 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:h-auto h-96 md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <Link to="/" className="block py-4 px-3 md:p-0 text-white rounded md:bg-transparent md:hover:text-color1 transition hover:transition font-semibold" aria-current="page">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/aboutus" className="block py-4 px-3 md:p-0 text-white rounded md:hover:bg-transparent md:hover:text-color1 transition hover:transition font-semibold">Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/support" className="block py-4 px-3 md:p-0 text-white rounded md:hover:bg-transparent md:hover:text-color1 transition hover:transition font-semibold">Soporte</Link>
                        </li>
                        {
                            user ? (
                                <div></div>
                            ) : (
                                <li className='mt-8 md:mt-0'>
                                    <Link to='/login' type="button" className="text-white hover:duration-300 duration-300 hover:scale-[109%] transition hover:transition btn-gradient font-medium rounded-lg text-sm py-4 px-6 text-center flex md:hidden justify-center items-center">Próximamente</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarWeb;