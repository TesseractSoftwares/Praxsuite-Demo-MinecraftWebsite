import { MainTitles } from "../MainTitles";

export const Leaderboard = () => {
    const data = [   
        {id: 1, rank: 3, name: 'Cha_Ry', staff: true, victories: 125, level: 50, economie: 5530},
        {id: 2, rank: 2, name: 'TheInventorist', staff: true, victories: 128, level: 76, economie: 4300},
        {id: 3, rank: 1, name: '4Kmz_', staff: true, victories: 200, level: 76, economie: 2072},
        {id: 4, rank: 4, name: 'TrunksMC1', staff: true, victories: 120, level: 23, economie: 2986},
        {id: 5, rank: 7, name: 'starry_soul_man', staff: false, victories: 20, level: 45, economie: 5233},
        {id: 6, rank: 5, name: 'gomeiban', staff: false, victories: 83, level: 43, economie: 4560},
        {id: 7, rank: 6, name: 'MrDonuts__', staff: false, victories: 83, level: 54, economie: 5709},
    ];

    const sortedData = [...data].sort((a, b) => b.victories - a.victories).slice(3, 7); // Mostrando los Top 5
    const top3 = [...data].sort((a, b) => a.rank - b.rank).slice(0, 3);

    const arrangedTop3 = [
        top3.find(player => player.rank === 2),
        top3.find(player => player.rank === 1),
        top3.find(player => player.rank === 3),
    ];
    
    return (
        <div className="py-16 px-4 autoShow flex flex-col items-center justify-center mx-auto text-center bg-[linear-gradient(rgba(39,39,58,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(39,39,58,0.3)_1px,transparent_1px)] bg-[size:50px_50px]">
            <MainTitles 
                smalltitle={'Tabla de clasificación'} 
                title={'¡Destaca entre la comunidad consiguiendo cantidades de victorias!'}
            />

            <div className="flex items-center justify-center py-10 px-4 w-full mb-2 autoShow">
                <div className="flex md:flex-row flex-col items-center justify-center md:gap-0 gap-5 w-full md:w-8/12">

                    {/* Player #2 --------------------- */}
                    <div className="flex items-center justify-center flex-col md:scale-90 w-full">
                        <div className="w-full h-full flex items-center justify-center flex-col md:px-10">
                            <img src={`https://minotar.net/avatar/${arrangedTop3[0].name}/80`} alt="n1" className=" rounded-lg shadow-2xl shadow-gray-400" />
                            <h2 className="text-white mt-2 text-xl font-semibold">{arrangedTop3[0].name}</h2>
                            {/* <div className="flex items-center justify-center text-center gap-2 mt-2">

                                <h2 className="text-white text-xl">{arrangedTop3[0].name}</h2>

                                <div className="bg-color1 w-7 h-7 rounded-md shadow-2xl flex items-center justify-center shadow-yellow-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-wrench-adjustable-circle text-indigo-900" viewBox="0 0 16 16">
                                        <path d="M12.496 8a4.5 4.5 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11q.04.3.04.61"/>
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.5 4.5 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8m-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27z"/>
                                    </svg>
                                </div>
                            </div> */}
                        </div>
                        <div className="w-full translate-y-6 flex items-center justify-center mb-1">
                            <div className="bg-gray-300 p-3 rounded-md shadow-2xl shadow-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trophy-fill text-gray-600" viewBox="0 0 16 16">
                                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                </svg>
                            </div>
                        </div>
                        <div className="bg-gradient-to-b from-color4 h-40 rounded-t-md via-color5 to-color-6 w-full py-2 px-3">
                            <p className="text-white text-base border-b border-color3 mt-4 py-2">Rango 2 | {arrangedTop3[0].victories} Victorias</p>
                            <p className="text-white text-sm mt-3">Nivel {arrangedTop3[0].level} | ${arrangedTop3[0].economie}</p>
                        </div>
                    </div>

                    {/* Player #1 --------------------- */}
                    <div className="flex items-center justify-center flex-col md:-translate-y-4 w-full">
                        <div className="w-full h-full flex items-center justify-center flex-col md:px-10">
                            <img src={`https://minotar.net/avatar/${arrangedTop3[1].name}/80`} alt="n1" className=" rounded-lg shadow-2xl shadow-yellow-300" />
                            <h2 className="text-white mt-2 text-xl font-semibold">{arrangedTop3[1].name}</h2>
                        </div>
                        <div className="w-full translate-y-6 flex items-center justify-center mb-1">
                            <div className="bg-yellow-200 p-3 rounded-md shadow-2xl shadow-yellow-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trophy-fill text-yellow-600" viewBox="0 0 16 16">
                                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                </svg>
                            </div>
                        </div>
                        <div className="bg-gradient-to-b from-color4 h-40 rounded-t-md via-color5 to-color-6 w-full py-2 px-3">
                            <p className="text-white text-base border-b border-color3 mt-4 py-2">Rango 1 | {arrangedTop3[1].victories} Victorias</p>
                            <p className="text-white text-sm mt-3">Nivel {arrangedTop3[1].level} | ${arrangedTop3[1].economie}</p>
                        </div>
                    </div>
                    
                    {/* Player #3 --------------------- */}
                    <div className="flex items-center justify-center flex-col md:scale-90 w-full">
                        <div className="w-full h-full flex items-center justify-center flex-col md:px-10">
                            <img src={`https://minotar.net/avatar/${arrangedTop3[2].name}/80`} alt="n1" className=" rounded-lg shadow-2xl shadow-yellow-500" />
                            <h2 className="text-white mt-2 text-xl font-semibold">{arrangedTop3[2].name}</h2>
                        </div>
                        <div className="w-full translate-y-6 flex items-center justify-center mb-1">
                            <div className="bg-yellow-500 p-3 rounded-md shadow-2xl shadow-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trophy-fill text-yellow-900" viewBox="0 0 16 16">
                                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                                </svg>
                            </div>
                        </div>
                        <div className="bg-gradient-to-b from-color4 h-40 rounded-t-md via-color5 to-color-6 w-full py-2 px-3">
                            <p className="text-white text-base border-b border-color3 mt-4 py-2">Rango 3 | {arrangedTop3[2].victories} Victorias</p>
                            <p className="text-white text-sm mt-3">Nivel {arrangedTop3[2].level} | ${arrangedTop3[2].economie}</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-full sm:max-w-full table-content rounded-lg">
                
                {/* test table */}

                <table className="w-full text-base text-left rtl:text-right text-white">
                    <thead className="text-base text-white bg-color3">
                        <tr>
                            <th scope="col" className="px-6 py-3">Rango</th>
                            <th scope="col" className="px-6 py-3">Jugador</th>
                            <th scope="col" className="px-6 py-3">Victorias</th>
                            <th scope="col" className="px-6 py-3">Nivel</th>
                            <th scope="col" className="px-6 py-3">Economia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sortedData.map((u, index) => (
                                <tr className="odd:bg-color5 even:bg-color5" key={index}>
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        {u.rank}.
                                    </th>
                                    <td className="px-6 py-4 pr-40 w-[37rem]">
                                        <div className="flex items-center gap-3">
                                            <img src={`https://minotar.net/avatar/${u.name}/28`} alt="" />
                                            {u.name}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 pr-16">
                                        {u.victories}
                                    </td>
                                    <td className="px-6 py-4 pr-16">
                                        {u.level}
                                    </td>
                                    <td className="px-6 py-4 pr-16">
                                       ${u.economie}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
}