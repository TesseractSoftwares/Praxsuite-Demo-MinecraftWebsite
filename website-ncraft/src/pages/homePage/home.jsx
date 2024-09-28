import { Header } from './homeComponents/header';
import { Minigames } from './homeComponents/minigames';
import { Instrucciones } from './homeComponents/instrucciones';
import { Leaderboard } from './homeComponents/table';
import { Footer } from '../../components/footer';

import '../../styles/home.css'

export const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <Minigames />
                <Instrucciones />
                <Leaderboard />
            </main>
            <Footer />
        </>
    );
}