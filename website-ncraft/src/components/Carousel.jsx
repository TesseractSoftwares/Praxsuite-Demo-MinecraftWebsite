import { Carousel } from 'flowbite-react';

export const CarouselComponent = () => {
    const slides = [
        {
            title: "Mascotas y Accesorios",
            description: "Equipate con los mejores accesorios de NexusCraft",
            buttonLabel: "¡Jugar ahora!",
            imageUrl: "https://hypixel.net/attachments/2021-09-19_12-58-04-png.2747218/"
        },
        {
            title: "Minijuego Pintadillas",
            description: "Escondete del Cazador o atrapa a los jugadores Escondidos",
            buttonLabel: "¡Jugar ahora!",
            imageUrl: "https://z-p3-scontent.fiqq3-1.fna.fbcdn.net/v/t39.30808-6/416376734_18010748675485088_1270128933101542313_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AKl9IXESjZQQ7kNvgFm78jQ&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq3-1.fna&_nc_gid=ANTiS-b-OuM3wSBfEf-Jd3_&oh=00_AYBABqJPKHqGaFMNe_kS_lJK1t7XHc_M2h9yoRTFHWyEiw&oe=66F1A58E" 
        },
        {
            title: "Slide 3",
            description: "Descripción del slide 3.",
            buttonLabel: "¡Jugar ahora!",
            imageUrl: "https://w.wallhaven.cc/full/1p/wallhaven-1p398w.jpg"
        }
    ];
  
    return (
      <Carousel className='w-carousel'>
        {slides.map((slide, index) => (
            <div key={index} className="flex flex-col items-center justify-center h-96 bg-gray-200 relative">
                <img src={slide.imageUrl} alt={slide.title} className="w-full h-96 object-cover" />
                <div className="flex flex-col items-center justify-center h-96 absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-color5 to-transparent">
                    <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
                    <p className="mt-2 text-center text-white">{slide.description}</p>
                    <button className="btn-gradient mt-6 px-4 py-2 group-focus:ring-white text-white rounded-sm">
                        {slide.buttonLabel}
                    </button>
                </div>
            </div>
        ))}
      </Carousel>
    );
};