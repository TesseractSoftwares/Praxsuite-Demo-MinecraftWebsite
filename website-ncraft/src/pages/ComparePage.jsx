// import '../styles/profile.css';
// import { Link } from 'react-router-dom';
// import ReactECharts from "echarts-for-react";
// import rank1 from '../img/Ranks/PNG/grandmaster.png';
// import rank2 from '../img/Ranks/PNG/diamond.png';

// //Gráfico de victorias/derrotas
// const WinLoseChart = ({ wins, losses }) => {
//   const option = {
//     backgroundColor: "transparent",
//     tooltip: { trigger: "item", backgroundColor: "#1F2937", textStyle: { color: "#fff" } },
//     legend: { bottom: 0, textStyle: { color: "#9CA3AF" } },
//     series: [
//       {
//         name: "Partidas",
//         type: "pie",
//         radius: ["40%", "70%"],
//         itemStyle: { borderRadius: 10, borderColor: "#111827", borderWidth: 2 },
//         labelLine: { show: false },
//         data: [
//           { value: wins, name: "Victorias", itemStyle: { color: "#A74FFF" } },
//           { value: losses, name: "Derrotas", itemStyle: { color: "#27273a" } },
//         ],
//       },
//     ],
//   };

//   return <ReactECharts option={option} style={{ height: 220, width: "100%" }} />;
// };

// //Tarjeta de jugador
// const PlayerCard = ({ player, wins, losses, games, hours, level, rank, currentStreak, bestStreak, ranked }) => {
//   return (
//     <div className="flex flex-col items-center bg-color4 rounded-md shadow-lg p-6">
//       <img
//         src={`https://vzge.me/bust/${player}.png`}
//         alt="avatar"
//         className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg shadow-green-500/30"
//       />
//       <input
//         type="text"
//         value={player}
//         placeholder="Buscar jugador..."
//         className="w-full max-w-xs px-4 py-2 mb-4 text-black rounded-lg focus:ring-2 focus:ring-color1 outline-none"
//       />
//       <h2 className="text-xl font-semibold mb-4">{player}</h2>

//       {/* Datos en cuadrícula */}
//       <div className="grid grid-cols-2 gap-6 mt-6 w-full text-center">
//         {/* Gráfico */}
//         <WinLoseChart wins={wins} losses={losses} />
//         <div className="relative flex flex-col items-center justify-center p-4">
//           {/* Círculos holográficos */}
//           <div className="absolute w-32 h-32 rounded-full border-4 border-color2 
//                           shadow-[0_0_20px_5px_rgba(34,211,238,0.7)] animate-pulse"></div>
//           <div className="absolute w-24 h-24 rounded-full border-2 border-color1 
//                           shadow-[0_0_15px_3px_rgba(103,232,249,0.6)] animate-ping"></div>
          
//           {/* Nivel */}
//           <div className="relative text-center">
//             <h2 className="text-4xl font-extrabold text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
//               {level}
//             </h2>
//             <p className="text-cyan-200 font-medium mt-2 tracking-widest text-sm">
//               Nivel
//             </p>
//           </div>
//         </div>

//         {/* Partidas */}
//         <div className="bg-[#313148] dark:bg-gray-700 rounded-sm p-4 shadow hover:scale-105 transition">
//           <h2 className="text-2xl font-bold text-cyan-300">{games}</h2>
//           <p className="text-gray-300 text-lg font-medium">Partidas</p>
//         </div>

//         {/* Horas */}
//         <div className="bg-[#313148] dark:bg-gray-700 rounded-sm p-4 shadow hover:scale-105 transition">
//           <h2 className="text-2xl font-bold text-cyan-300">{hours}h</h2>
//           <p className="text-gray-300 text-lg font-medium">Horas</p>
//         </div>

//         {/* Racha actual */}
//         <div className="bg-[#313148] dark:bg-gray-700 rounded-sm p-4 shadow hover:scale-105 transition">
//           <div className='flex items-center justify-center'>
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-fire text-yellow-400" viewBox="0 0 16 16">
//               <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
//             </svg>
//             <h2 className="text-2xl font-bold text-yellow-400">{currentStreak}</h2>
//           </div>
          
//           <p className="text-gray-300 text-lg font-medium">Racha actual</p>
//         </div>

//         {/* Mejor racha */}
//         <div className="bg-[#313148] dark:bg-gray-700 rounded-sm p-4 shadow hover:scale-105 transition">
//           <div className='flex items-center justify-center'>
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-fire text-red-500" viewBox="0 0 16 16">
//               <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
//             </svg>
//             <h2 className="text-2xl font-bold text-red-500">{bestStreak}</h2>
//           </div>
          
//           <p className="text-gray-300 text-lg font-medium">Mejor racha</p>
//         </div>

//         {/* Rango */}
//         <div className="bg-[#313148] dark:bg-gray-700 rounded-sm p-6 shadow flex flex-col items-center justify-center hover:scale-110 transition">
//           <div className="relative w-24 h-24 text-yellow-300 mb-3">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 64 64"
//               fill="currentColor"
//               className="w-full h-full drop-shadow-[0_0_25px_rgba(253,224,71,0.8)]"
//             >
//               <path d="M52 8H44V4H20v4h-8a4 4 0 0 0-4 4v6a14 14 0 0 0 12 13.86A16 16 0 0 0 28 42.9V52h-8a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4h-8v-9.1a16 16 0 0 0 8-10.98A14 14 0 0 0 56 18V12a4 4 0 0 0-4-4zM12 12h4v10a10 10 0 0 1-4-8v-2zm40 6a10 10 0 0 1-4 8V12h4v6z"/>
//             </svg>
//             <div className="absolute inset-0 flex items-center justify-center -translate-y-3">
//               <span className="text-white text-2xl font-extrabold drop-shadow-[0_0_12px_rgba(253,224,71,1)]">
//                 #{rank}
//               </span>
//             </div>
//           </div>
//           <p className="text-gray-300 text-lg font-medium">Rango</p>
//         </div>

//         {/* Liga */}
//         <div className='bg-[#313148] dark:bg-gray-700 rounded-sm p-6 shadow flex flex-col items-center justify-center hover:scale-110 transition'>
//           <img src={ranked} className='inset-0 -translate-y-3 w-40 h-40' alt="ranked" />
//           <p className="text-gray-300 inset-0 -translate-y-6 text-lg font-medium">Liga</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ComparePage = () => {
//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-color6 text-white px-4 p-10">
      
//       <div className="relative flex items-center justify-between w-full mb-6">
//         <Link
//           to='/profile'
//           type="button"
//           className="text-white hover:duration-300 duration-300 hover:scale-[109%] transition hover:transition btn-gradient font-medium rounded-lg text-sm py-4 px-6 text-center md:flex items-center"
//         >
//           Volver
//         </Link>
//         <h1 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold">
//           Comparación de Jugadores
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
//         <PlayerCard
//           player="4Kmz_"
//           wins={120}
//           losses={80}
//           games={356}
//           hours={4523}
//           level={30}
//           rank={1}
//           currentStreak={12}
//           bestStreak={25}
//           ranked={rank1}
//         />
//         <PlayerCard
//           player="TrunksMC1"
//           wins={90}
//           losses={110}
//           games={300}
//           hours={2054}
//           level={20}
//           rank={2}
//           currentStreak={5}
//           bestStreak={18}
//           ranked={rank2}
//         />
//       </div>
//     </div>
//   );
// };

// export default ComparePage;