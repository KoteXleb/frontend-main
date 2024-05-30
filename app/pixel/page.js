'use client'

import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "../api/api-hoocks";
import { Preloader } from "../components/Preloader/Preloader";


export default function Pixel() {
    const pixelGames = useGetDataByCategory(endpoints.games, 'pixel');
    return (
        <main className="main-inner">
            {pixelGames ? (
                <CardsListSection id='pixel' title='Пиксельные' data={pixelGames} />
            ) : (
                <Preloader />
            )}
        </main>
    )
} 