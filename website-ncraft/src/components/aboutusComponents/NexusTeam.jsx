import { MainTitles } from "../MainTitles"

export const NexusTeam = () => {
    const staff = [
        {username: '4Kmz_', name: 'Nombre Apellido'},
        {username: 'TheInventorist', name: 'Nombre Apellido'},
        {username: 'Cha_Ry', name: 'Nombre Apellido'},
        {username: 'TrunksMC1', name: 'Nombre Apellido'},
        {username: '4Kmz_', name: 'Nombre Apellido'},
        {username: '4Kmz_', name: 'Nombre Apellido'},
        {username: 'TheInventorist', name: 'Nombre Apellido'},
        {username: 'Cha_Ry', name: 'Nombre Apellido'},
    ];

    return (
        <div className="radial-bg py-16 px-6 flex flex-col items-center justify-center mx-auto max-w-screen-xl text-center autoShow">
            <MainTitles
                smalltitle={'Nuestro Equipo'} 
                title={'Conoce al equipo de NexusCraft'} 
            />

            <div className="grid items-center justify-center lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 w-72 md:w-auto">
                {
                    staff.map((s, index) => (
                        <div key={index} className="bg-color5 flex items-center justify-center bg-opacity-90 py-8 px-4 w-full h-full rounded-lg shadow-lg hover:duration-300 duration-300 hover:scale-[105%] transition hover:transition">
                            <div className="md:w-52 w-40 flex items-center justify-center flex-col md:px-10">
                                <img src={`https://vzge.me/bust/${s.username}.png`} alt="n1" className="rounded-lg" />
                                <h2 className="text-white mt-2 text-lg font-semibold">{s.username}</h2>
                                <div className="flex gap-3 mt-2">
                                    <div className="py-1 px-3 flex items-center justify-center gap-2 bg-color3 shadow-lg rounded">
                                        <p className='text-white font-semibold'>Chile</p>
                                        <img src="https://flagcdn.com/16x12/cl.png" alt="country" className='h-4' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}