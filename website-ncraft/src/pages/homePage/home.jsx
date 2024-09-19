import { Header } from './homeComponents/header';
import { Minigames } from './homeComponents/minigames';
import { Instrucciones } from './homeComponents/instrucciones';
import '../../styles/home.css'

export const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <Minigames />
                <Instrucciones />
            </main>
        </>
    );
}