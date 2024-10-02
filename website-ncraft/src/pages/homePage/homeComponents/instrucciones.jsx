import { WebTitlesComponent } from "../../../components/webtitles";
import { InstrucctionCard } from "../../../components/instrcard";
import { HrefGradient } from "../../../components/buttons/hrefgradient";
import { HrefDiscord } from "../../../components/buttons/hrefdiscord";
import { BtnServerIp } from "../../../components/buttons/btnserverip";

import Step1Icon from '../../../img/icons/Test Account.png'
import Step2Icon from '../../../img/icons/Discord New.png'
import Step3Icon from '../../../img/icons/Minecraft Pickaxe.png'

export const Instrucciones = () => {
    return (
        
        <div className="mt-18 flex flex-col items-center justify-center py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <WebTitlesComponent 
                smalltitle={'- Instrucciones de ingreso -'} 
                title={'¿Como puedo unirte a la comunidad y jugar el minijuego?'}
            />
            <div className="instruccion-content">
                <InstrucctionCard 
                    icon={Step1Icon} 
                    step={'PASO 1:'} 
                    title={'Registrate en nuestra página web'} 
                    tbutton={<HrefGradient href={'/register'} btnlabel={'¡Registrate ahora!'}/>}
                    bg={'bg-color5'}
                />
                <InstrucctionCard 
                    icon={Step2Icon} 
                    step={'PASO 2:'} 
                    title={'Unete a la comunidad de NexusCraft'} 
                    href={'...'}
                    btnlabel={'Unirse al servidor'}
                    tbutton={<HrefDiscord btnlabel={'Unirse al servidor'}/>}
                    bg={'bg-color4'}
                />
                <InstrucctionCard 
                    icon={Step3Icon} 
                    step={'PASO 3:'} 
                    title={'Añade NexusCraft a tu lista de servidores'} 
                    tbutton={<BtnServerIp/>}
                    bg={'bg-color5'}
                />
            </div>
        </div>
    );
}