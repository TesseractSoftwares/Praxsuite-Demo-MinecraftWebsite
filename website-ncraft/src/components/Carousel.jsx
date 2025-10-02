import { Carousel } from 'flowbite-react';
import imgn from '../img/hero.bg.png';

export const CarouselComponent = () => {
    const slides = [
        {
            title: "Mascotas y Accesorios",
            description: "Equipate con los mejores accesorios de NexusCraft",
            buttonLabel: "Próximamente", // ¡Jugar ahora!
            imageUrl: "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/4207b3d4-2719-4a65-9833-053069c02c20/Spark_Pets_Lite_screenshot_4.jpg"
        },
        {
            title: "Minijuego Pintadillas",
            description: "Escondete del Cazador o atrapa a los jugadores Escondidos",
            buttonLabel: "Próximamente",
            imageUrl: "https://preview.redd.it/to6wq2w4k5h91.png?width=1680&format=png&auto=webp&s=d77dfa8286a5a6bf9caa9251e00e39d7d164cc64" 
        },
        {
            title: "NexusCraft",
            description: "Próximamente disponible",
            buttonLabel: "Próximamente",
            imageUrl: imgn
        }
    ];
  
    return (
      <Carousel className='w-carousel autoShow rounded-xl'>
        {
            slides.map((slide, index) => (
                <div key={index} className="flex flex-col items-center justify-center h-[32rem] relative">
                    <img src={slide.imageUrl} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="flex flex-col items-center justify-center h-full absolute left-0 right-0 p-4 bg-gradient-to-t from-color5 to-transparent">
                        <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
                        <p className="mt-2 text-center text-white">{slide.description}</p>
                        <a href='/' className="btn-gradient hover:scale-[109%] transition hover:transition mt-6 px-8 py-4 text-white rounded-sm">
                            {slide.buttonLabel}
                        </a>
                    </div>
                </div>
            ))
        }
      </Carousel>
    );
};