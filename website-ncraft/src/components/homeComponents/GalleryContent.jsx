import img from "../../img/mc-enviroment.png";
import { MainTitles } from "../MainTitles";

export const GalleryContent = ()=>{
    const image = [
        {src:img, alt:"image"},
        {src:img, alt:"image"},
        {src:img, alt:"image"},
        {src:img, alt:"image"},
        {src:img, alt:"image"},
        {src:img, alt:"image"}
    ]

    return(
        <div className="py-16 autoShow px-4 flex items-center justify-center text-center flex-col radial-bg2">
            <MainTitles 
                smalltitle={'Imagenes del servidor'} 
                title={'Echa un vistazo a los increibles ambientes que puedes encontrar en NexusCraft'}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                
                {
                    image.map((i, index)=>(
                        <div key={index} className="relative md:w-80">
                            <img src={i.src} alt={i.alt} className="object-contain w-full h-full rounded-lg"/>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}