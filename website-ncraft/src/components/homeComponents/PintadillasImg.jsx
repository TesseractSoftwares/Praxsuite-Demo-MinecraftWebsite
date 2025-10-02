import { CarouselComponent } from "../Carousel";
import { MainTitles } from "../MainTitles";

export const PintadillasImg = () => {
    return (
        <div className="py-16 px-4 flex flex-col items-center justify-center mx-auto max-w-screen-xl text-center autoShow">
            <MainTitles 
                smalltitle={'Nuestros Minijuegos'} 
                title={'Explora nuestro minijuego Pintadillas, consigue accesorios, mascotas, títulos y más'} 
            />
            <CarouselComponent />
        </div>
    );
}