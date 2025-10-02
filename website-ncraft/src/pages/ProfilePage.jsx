import '../styles/profile.css';
import NavbarWeb from '../components/NavbarWeb';
import { useEffect } from 'react';
import PlayerData from '../utils/PlayerData';
import FooterComponent from '../components/FooterComponent';
// import { Link } from 'react-router-dom';
import rank1 from '../img/Ranks/PNG/grandmaster.png';
import rank2 from '../img/Ranks/PNG/diamond.png';

const ProfilePage = () => {
    const user = PlayerData();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='flex flex-col justify-center'>
            <NavbarWeb />
            <div className="profile-bg w-full h-[60vh] relative flex items-center justify-center py-16 px-4">

                <div className="flex md:flex-row flex-col w-full items-center justify-center absolute bottom-0 px-4">
                    <div className="relative w-72">
                        <img src={`https://vzge.me/bust/${user?.playername}.png`} alt="avatar" className='object-cover w-full h-full' />
                        {/* <div className="bg-gradient-to-b absolute from-transparent via-transparent to-color5 w-full h-full top-0"></div> */}
                    </div>
                    <div className=" md:w-96 w-full h-auto md:flex md:flex-col hidden">
                        <h2 className='text-5xl font-bold text-white oswald'>{user?.playername}</h2>
                        <p className='font-semibold mt-3 text-[#7776A8]'>UUID: {user?.uuid}</p>
                        <strong className='w-full h-[1px] bg-color1 mt-3'></strong>
                        <div className="flex gap-3 mt-3">
                            <div className="py-1 px-3 flex items-center justify-center gap-2 bg-color4 shadow-lg rounded">

                                <div className={`${user?.online ? 'bg-green-600' : 'bg-red-600'} w-3 h-3 rounded-full`}></div>
                                <p className='text-white font-semibold'>{user?.online ? 'Online' : 'Offline'}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>    
            </div>

            <div className='py-8 px-4 flex flex-col items-center justify-center w-full text-center '>
                <div className="flex items-center justify-center gap-4 py-8">
                    <div className="text-white bg-color3 bg-opacity-60 w-60 p-4 rounded-lg">
                        <p className='text-2xl'>30</p>
                        <p className='footer-link'>Nivel actual</p>
                        
                    </div>
                    <div className="text-white bg-color3 bg-opacity-60 w-60 p-4 rounded-lg">
                        <p className='text-2xl'>#1</p>
                        <p className='footer-link'>Top</p>
                        
                    </div>
                    <div className="text-white bg-color3 bg-opacity-60 w-60 p-4 rounded-lg">
                        <p className='text-2xl'>{user?.timePlayed} 0 hrs.</p>
                        <p className='footer-link'>Horas jugadas</p>
                        
                    </div>
                    
                </div>
                <strong className='w-3/6 h-[1px] bg-color3 mt-3'></strong>
                <div className="w-3/6 flex flex-col items-center justify-center py-8">
                    
                    <div className='flex justify-between items-center w-full mb-4'>
                        <h3 className='text-white text-left w-full font-bold text-xl'>{user?.gamesPlayed} Partidas jugadas</h3>
                        {/* <Link to='/compare' type="button" className="text-white hover:duration-300 duration-300 hover:scale-[109%] transition hover:transition btn-gradient font-medium rounded-lg text-sm py-4 px-6 text-center md:flex items-center">Comparar</Link> */}
                    </div>
                    
                    {/* barra de xp */}
                    <div className="w-full">
                        <div class="flex justify-between mb-1">
                            <span class="text-base font-medium text-white dark:text-white">{user?.wins}</span>
                            <span class="text-base font-medium text-white dark:text-white">{user?.losses}</span>
                        </div>
                        <div class="w-full bg-[#313148] mb-1 rounded-sm h-3 dark:bg-gray-700">
                            <div class="bg-gradient-to-r from-color2 to-color1 h-3 rounded-sm w-[50%]"></div>
                        </div>
                        <div class="flex justify-between mb-1">
                            <span class="text-base font-medium text-white dark:text-white">50% Victorias</span>
                            <span class="text-base font-medium text-white dark:text-white">50% Derrotas</span>
                        </div>
                    </div>

                </div>
                <div className="flex w-3/6 items-center justify-center gap-4 py-8">
                    <div className="text-white bg-color3 bg-opacity-60 w-full p-4 rounded-lg">
                        
                        <div className='flex justify-center items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-fire text-yellow-400" viewBox="0 0 16 16">
                                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
                            </svg>
                            <p className='text-2xl'>{user?.currentStreak}</p>
                        </div>
                        <p className='footer-link'>Racha actual de victorias</p>
                    </div>
                    <div className="text-white bg-color3 bg-opacity-60 w-full p-4 rounded-lg">
                        
                        <div className='flex justify-center items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-fire text-red-500" viewBox="0 0 16 16">
                                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
                            </svg>
                            <p className='text-2xl'>{user?.highestStreak}</p>
                        </div>
                        <p className='footer-link'>Mejor racha de victorias</p>
                    </div>
                    
                </div>
                <div className="flex gap-4">
                    <div className="w-full flex items-center justify-center py-8">
                        <div className="flex bg-color3 bg-opacity-60 rounded-lg h-72 w-80">
                            <div className="bg-gradient-to-t w-full from-[#5200a360] from-10% via-color4 via-60% to-color4 to-100% px-10 py-4 rounded-lg flex flex-col items-center justify-center">
                                <p className='text-[#7776A8] font-bold uppercase'>Rango actual</p>
                                <div className="relative w-36 h-36 mt-4  flex items-center justify-center">
                                    <img src={rank1} alt="rank" className='w-full object-cover' />
                                </div>
                                <p className='text-[#7C47FF] font-semibold mt-4'>Primordial</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center py-8">
                        <div className="flex bg-color3 bg-opacity-60 rounded-lg h-72 w-80">
                            <div className="bg-gradient-to-t w-full from-[#0036ca60] from-10% via-color4 via-60% to-color4 to-100% px-10 py-4 rounded-lg flex flex-col items-center justify-center">
                                <p className='text-[#7776A8] font-bold uppercase'>Rango Anterior</p>
                                <div className="relative w-36 h-36 mt-4 flex items-center justify-center">
                                    <img src={rank2} alt="rank" className='w-full object-cover' />
                                </div>
                                <p className='text-[#4474FD] font-semibold mt-4'>Diamante</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            
            <div className="bg-color6 w-full h-auto flex flex-col md:hidden py-10 px-6">
                <h2 className='text-4xl font-bold text-white bg-gray-700 bg-opacity-45 oswald'>{user?.playername}</h2>
                <p className='font-semibold text-sm mt-3 text-[#7776A8]'>UUID: {user?.uuid}</p>
                <strong className='w-full h-[1px] bg-color1 mt-3'></strong>

                <div className="flex gap-3 mt-3">
                    <div className="py-1 px-3 flex items-center justify-center gap-2 bg-color3 rounded">
                        <p className='text-white bg-gray-700 bg-opacity-45 font-semibold'>Chile</p>
                        <img src="https://flagcdn.com/16x12/cl.png" alt="country" className='h-4' />
                    </div>
                </div>

                <div className="w-full h-96 bg-color4 p-2 mt-6 rounded-lg">
                    
                </div>
            </div>
            
            <FooterComponent />
        </div>    
    )
};

export default ProfilePage;