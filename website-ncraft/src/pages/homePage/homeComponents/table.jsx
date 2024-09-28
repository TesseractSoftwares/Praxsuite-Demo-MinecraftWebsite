import { WebTitlesComponent } from "../../../components/webtitles";

export const Leaderboard = () => {
    const data = [   
        {id: 1, rank: 2, name: '4Kmz_', victories: 125, level: 50, economie: 55300},
        {id: 2, rank: 3, name: '4Kmz_', victories: 78, level: 76, economie: 400},
        {id: 3, rank: 1, name: '4Kmz_', victories: 1200, level: 999999, economie: 999999},
        {id: 4, rank: 4, name: '4Kmz_', victories: 153, level: 999999, economie: 999999},
        {id: 5, rank: 10, name: '4Kmz_', victories: 153, level: 999999, economie: 999999},
        {id: 6, rank: 5, name: '4Kmz_', victories: 153, level: 999999, economie: 999999},
        {id: 7, rank: 8, name: '4Kmz_', victories: 153, level: 999999, economie: 999999},
        {id: 8, rank: 9, name: '4Kmz_', victories: 153, level: 999999, economie: 999999},
        {id: 9, rank: 7, name: '4Kmz_', victories: 153, level: 999999, economie: 999999},
        {id: 10, rank: 6, name: '4Kmz_', victories: 153, level: 999999, economie: 999999},
    ];

    const sortedData = [...data].sort((a, b) => b.victories - a.victories).slice(0, 10); // Mostrando los Top 5
    
    return (
        <section className="mt-18 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
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
        </section>

    );
}