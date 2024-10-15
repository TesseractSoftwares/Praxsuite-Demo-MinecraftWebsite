import { WebTitlesComponent } from "../../../components/webtitles";

export const Leaderboard = () => {
    const data = [   
        {id: 1, rank: 2, name: 'Cha_Ry', victories: 125, level: 50, economie: 5530},
        {id: 2, rank: 3, name: 'TheInventorist', victories: 128, level: 76, economie: 4300},
        {id: 3, rank: 1, name: '4Kmz_', victories: 200, level: 76, economie: 2072},
        {id: 4, rank: 4, name: 'TrunksMC1', victories: 120, level: 23, economie: 2986},
        {id: 5, rank: 10, name: 'starry_soul_man', victories: 20, level: 45, economie: 5233},
        {id: 6, rank: 5, name: '4Kmz_', victories: 13, level: 0, economie: 0},
        {id: 7, rank: 8, name: 'gomeiban', victories: 83, level: 43, economie: 4560},
        {id: 8, rank: 9, name: 'MrDonuts__', victories: 83, level: 54, economie: 5709},
        {id: 9, rank: 7, name: '4Kmz_', victories: 10, level: 0, economie: 0},
        {id: 10, rank: 6, name: '4Kmz_', victories: 12, level: 0, economie: 0},
    ];

    const sortedData = [...data].sort((a, b) => b.victories - a.victories).slice(0, 7); // Mostrando los Top 5
    
    return (
        <div className="mt-18 flex flex-col items-center justify-center py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <WebTitlesComponent 
                smalltitle={'- Tabla de clasificación -'} 
                title={'¡Destaca entre la comunidad consiguiendo cantidades de victorias!'}
            />

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-80 sm:max-w-full table-content rounded-lg">
                
                {/* test table */}

                <table className="w-full text-sm text-left rtl:text-right text-white">
                    <thead className="text-xs text-white bg-color3">
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
                                <tr className="odd:bg-color4 even:bg-color5" key={index}>
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        {index + 1}.
                                    </th>
                                    <td className="px-6 py-4 pr-40">
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