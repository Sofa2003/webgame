"use client";
import Image from 'next/image';
import { useState } from 'react';
import {redirect} from "next/navigation";

export default function HomePage() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleSwitchChange = () => {
        setIsDarkMode(!isDarkMode);
    };
    const handleLogout = () => {
        redirect('/avtorise');
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            {/* Header */}
            <header className={`p-4 flex items-center ${isDarkMode ? 'bg-green-950' : 'bg-green-500'}`}>
                <h1 className="text-xl font-bold ml-2">GAMEPOWER</h1>
                <h1 className="text-xl font-bold ml-2"> </h1>
                <button onClick={handleSwitchChange} className={`${isDarkMode ? 'text-gray-300' : 'text-white'} hover:underline`}>
                    {isDarkMode ? 'Светлая тема' : 'Темная тема'}
                </button>
                <div className="flex-grow" />
                <h1 className="text-xl font-bold ml-2"> </h1>
                <button onClick={handleLogout} className={`${isDarkMode ? 'text-gray-300' : 'text-white'} hover:underline`}>
                     Выйти
                </button>
            </header>

            {/* Main Content */}
            <main className={`p-4 flex ${isDarkMode ? 'bg-gray-900' : 'bg-white'} w-full`}>
                {/* Left Panel */}
                <div className={`w-1/4 p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} flex-shrink-0`}>
                    <button className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mb-4">
                        Забронировать
                    </button>
                    <div className="flex items-center mb-2">
                        <Image
                            src="/photo_2025-02-11_17-02-30.jpg" // Замените на путь к вашему изображению
                            alt="Icon"
                            width={20} // Укажите нужную ширину
                            height={20} // Укажите нужную высоту
                            className="mr-2" // Отступ справа от изображения
                        />
                        <a href="#" className="hover:underline">Главная</a>
                    </div>
                    <div className="flex items-center mb-2">
                        <Image
                            src="/photo_2025-02-11_17-02-37.jpg" // Замените на путь к вашему изображению
                            alt="Icon"
                            width={20} // Укажите нужную ширину
                            height={20} // Укажите нужную высоту
                            className="mr-2" // Отступ справа от изображения
                        />
                        <a href="#" className="hover:underline">Команды</a>
                    </div>
                    <div className="flex items-center mb-2">
                        <Image
                            src="/photo_2025-02-11_17-02-47.jpg" // Замените на путь к вашему изображению
                            alt="Icon"
                            width={20} // Укажите нужную ширину
                            height={20} // Укажите нужную высоту
                            className="mr-2" // Отступ справа от изображения
                        />
                        <a href="#" className="hover:underline">Контакты</a>
                    </div>
                </div>

                {/* Right Content */}
                <div className={`w-3/4 p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} flex-grow`}>
                    <h2 className="text-2xl font-bold mb-4">Добро пожаловать в GAMEPOWER!</h2>
                    <div className="grid grid-cols-2 gap-4 items-center">
                        <Image
                            src="/249383_O.png"
                            alt="Game Image 1"
                            width={400}
                            height={200}
                            className="rounded-lg"
                        />
                        <Image
                            src="/n_6352c2ed26e0b.jpg"
                            alt="Game Image 1"
                            width={400}
                            height={200}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}