import { Carousel } from 'flowbite-react';
import imgn from '../img/hero.bg.png';

export const CarouselComponent = () => {
    const slides = [
        {
            title: "Mascotas y Accesorios",
            description: "Equipate con los mejores accesorios de NexusCraft",
            buttonLabel: "¡Jugar ahora!",
            imageUrl: "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/4207b3d4-2719-4a65-9833-053069c02c20/Spark_Pets_Lite_screenshot_4.jpg"
        },
        {
            title: "Minijuego Pintadillas",
            description: "Escondete del Cazador o atrapa a los jugadores Escondidos",
            buttonLabel: "¡Jugar ahora!",
            imageUrl: "https://preview.redd.it/to6wq2w4k5h91.png?width=1680&format=png&auto=webp&s=d77dfa8286a5a6bf9caa9251e00e39d7d164cc64" 
        },
        {
            title: "NexusCraft",
            description: "Proximamente disponible",
            buttonLabel: "¡Jugar ahora!",
            imageUrl: imgn
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