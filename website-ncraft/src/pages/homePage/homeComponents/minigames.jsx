import { CarouselComponent } from "../../../components/Carousel";
import { WebTitlesComponent } from "../../../components/webtitles";

export const Minigames = () => {
    return (
        <div className="mt-20 flex flex-col items-center justify-center py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <WebTitlesComponent 
                smalltitle={'- Nuestros Minijuegos -'} 
                title={'Explora nuestro minijuego Pintadillas, consigue accesorios, mascotas, títulos y más'} 
            />
            <CarouselComponent />
        </div>
    );
}