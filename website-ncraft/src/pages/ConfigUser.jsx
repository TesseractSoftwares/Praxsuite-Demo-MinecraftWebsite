import '../styles/profile.css';
import NavbarWeb from '../components/NavbarWeb';
import { useEffect, useRef } from 'react';
import PlayerData from '../utils/PlayerData';
import UserAuth from '../utils/UserAuth';

const ConfigUser = () => {
    const player = PlayerData();
    const user = UserAuth();

    const personalInformation = useRef(null);
    const publicInformation = useRef(null);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // };

    return (
        <div className='flex items-center justify-center'>
            <NavbarWeb />
            <div className="flex justify-center bg-color6 w-full py-16 px-4 relative">
                <div className="fixed z-10 left-56 translate-y-52">
                    <p className='mb-2 text-color1'>
                        Configuración
                    </p>
                    <p className='text-4xl text-white w-72 font-bold uppercase'>
                        Administración de la cuenta
                    </p>
                    <div className="md:w-80 w-full h-auto flex flex-col gap-1 mt-4">
                        <strong className="w-full h-[1px] bg-color1 mt-3"></strong>
                    </div>

                    <div className="mt-8">
                        <button onClick={() => scrollToSection(publicInformation)} className="py-3 flex items-center rounded-lg gap-2 cursor-pointer group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle text-[#7776A8] group-hover:text-color1 group-hover:transition transition duration-200" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                            <p className='text-white font-semibold uppercase'>Información pública</p>
                        </button>

                        <button onClick={() => scrollToSection(personalInformation)} className="py-3 flex items-center rounded-lg gap-2 cursor-pointer group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill-lock text-[#7776A8] group-hover:text-color1 group-hover:transition transition duration-200" viewBox="0 0 16 16">
                                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5v-1a2 2 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693Q8.844 9.002 8 9c-5 0-6 3-6 4m7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"/>
                            </svg>
                            <p className='text-white font-semibold uppercase'>Información personal</p>
                        </button>

                        <div className="py-3 flex items-center rounded-lg gap-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle text-[#7776A8]" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                            <p className='text-white font-semibold uppercase'>Información pública</p>
                        </div>
                    </div>
                        
                        {/* <div className="w-72">
                            <img
                                src={`https://vzge.me/bust/${player?.playername}.png`}
                                alt="avatar"
                                className="object-cover w-full h-full"
                            />
                        </div> */}

                        {/* <div className="md:w-80 w-full h-auto flex flex-col gap-1 mt-4">
                            <h2 className="text-5xl font-bold text-white oswald">
                                {player?.playername}
                            </h2>
                            <p className="font-semibold text-sm mt-3 text-[#7776A8]">
                                UUID: {player?.uuid}
                            </p>
                            <strong className="w-full h-[1px] bg-color1 mt-3"></strong>
                        </div> */}
                </div>
                
                <div className="flex w-full items-start justify-center space-x-36 px-4 py-10 translate-y-10">
                    <p className='w-80'></p>

                    <div className="w-6/12 h-full grid space-y-4">
                        <div ref={publicInformation} className="bg-[#16161f] h-96 w-full rounded-lg flex scroll-mt-96">
                            <div className="bg-[#16161f] py-10 px-10 w-full h-full">
                                <h3 className='text-white text-2xl font-bold uppercase'>Información Pública</h3>
                                <p className='mt-2 text-[#7776A8]'>Está es la información que otras personas podrán ver de ti como jugador, tu avatar, username, online/offline, UUID público, etc.</p>
                            </div>
                            <div className="bg-color4 p-6 w-full h-full items-center flex flex-col justify-center">
                                <div className="relative w-36 mb-4">
                                    <img src={`https://vzge.me/bust/${player?.playername}.png`} alt="avatar" className='object-cover w-full h-full' />
                                </div>
                                <div className="text-center">
                                    <div className="flex gap-4 items-center justify-center">
                                        <h2 className='text-3xl font-bold text-white oswald'>{player?.playername}</h2>
                                        <div className="py-1 px-3 flex items-center justify-center gap-2 bg-color5 shadow-lg rounded">
                                            <div className={`${user?.online ? 'bg-green-600' : 'bg-red-600'} w-3 h-3 rounded-full`}></div>
                                            <p className='text-white font-semibold'>{user?.online ? 'Online' : 'Offline'}</p>  
                                        </div>
                                    </div>
                                    <p className='font-semibold text-xs mt-3 text-[#7776A8]'>UUID: {player?.uuid}</p>
                                </div>
                            </div>
                        </div>
                        <div ref={personalInformation} className="bg-[#16161f] h-96 w-full rounded-lg flex scroll-mt-32">
                            <div className="bg-[#16161f] py-10 px-10 w-full h-full">
                                <h3 className='text-white text-2xl font-bold uppercase'>Información Personal</h3>
                                <p className='mt-2 text-[#7776A8]'>Está es tu información personal de usuario, puedes cambiar tu configuración actual si lo deseas.</p>
                            </div>
                            <div className="bg-color4 px-6 py-10 w-full h-full flex flex-col">
                                <div className="text-center">
                                    <div class="relative w-full mb-6">
                                        <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-[#7776A8] appearance-none focus:outline-none focus:ring-0 focus:border-color1 peer" placeholder={''} value={user?.email} />
                                        <label for="floating_outlined" class="absolute text-sm text-[#7776A8] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-color4 px-2 peer-focus:px-2 peer-focus:text-color1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Correo electrónico</label>
                                    </div>

                                    <div class="relative w-full mb-6">
                                        <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-[#7776A8] appearance-none focus:outline-none focus:ring-0 focus:border-color1 peer" placeholder={''} />
                                        <label for="floating_outlined" class="absolute text-sm text-[#7776A8] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-color4 px-2 peer-focus:px-2 peer-focus:text-color1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Contraseña actual</label>
                                    </div>

                                    <div class="relative w-full mb-6">
                                        <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-[#7776A8] appearance-none focus:outline-none focus:ring-0 focus:border-color1 peer" placeholder={''} />
                                        <label for="floating_outlined" class="absolute text-sm text-[#7776A8] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-color4 px-2 peer-focus:px-2 peer-focus:text-color1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Nueva contraseña</label>
                                    </div>

                                    <div class="relative w-full mb-6">
                                        <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-[#7776A8] appearance-none focus:outline-none focus:ring-0 focus:border-color1 peer" placeholder={''} />
                                        <label for="floating_outlined" class="absolute text-sm text-[#7776A8] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-color4 px-2 peer-focus:px-2 peer-focus:text-color1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Confirmar contraseña</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#16161f] h-96 w-full rounded-lg flex scroll-mt-32"></div>
                        <div className="bg-[#16161f] h-96 w-full rounded-lg flex scroll-mt-32"></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ConfigUser;