import { CarouselComponent } from "../../../components/Carousel";
import { WebTitlesComponent } from "../../../components/webtitles";

export const Minigames = () => {
    return (
        <section className="mt-20 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <WebTitlesComponent 
                smalltitle={'- Nuestros Minijuegos -'} 
                title={'Explora nuestro minijuego Pintadillas, consigue accesorios, mascotas, títulos y más'} 
            />
            <CarouselComponent />
        </section>
    );
}