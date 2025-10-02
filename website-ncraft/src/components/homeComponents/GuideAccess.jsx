import { GuideAccessCard } from "../GuideAccessCard";
import { HrefGradient } from "../buttons/hrefgradient";
import { HrefDiscord } from "../buttons/hrefdiscord";
import { BtnServerIp } from "../buttons/btnserverip";

import Step1Icon from '../../img/icons/Test Account.png'
import Step2Icon from '../../img/icons/Discord New.png'
import Step3Icon from '../../img/icons/Minecraft Pickaxe.png'
import { MainTitles } from "../MainTitles";

export const GuideAccesss = () => {
    return (
        
        <div className="py-16 px-4 autoShow flex flex-col items-center justify-center mx-auto max-w-screen-xl text-center radial-bg">
            <MainTitles 
                smalltitle={'Instrucciones de ingreso'} 
                title={'¿Como puedo unirte a la comunidad y jugar el minijuego?'}
            />
            <div className="instruccion-content">
                <GuideAccessCard 
                    icon={Step1Icon} 
                    step={'PASO 1:'} 
                    title={'Registrate en nuestra página web'} 
                    tbutton={<HrefGradient href={'/'} btnlabel={'Próximamente'}/>}
                    bg={'bg-color4'}
                />
                <GuideAccessCard 
                    icon={Step2Icon} 
                    step={'PASO 2:'} 
                    title={'Unete a la comunidad de NexusCraft'} 
                    href={'...'}
                    btnlabel={'Unirse al servidor'}
                    tbutton={<HrefDiscord btnlabel={'Próximamente'}/>}
                    bg={'bg-color4'}
                />
                <GuideAccessCard 
                    icon={Step3Icon} 
                    step={'PASO 3:'} 
                    title={'Añade NexusCraft a tu lista de servidores'} 
                    tbutton={<BtnServerIp/>}
                    bg={'bg-color4'}
                />
            </div>
        </div>
    );
}