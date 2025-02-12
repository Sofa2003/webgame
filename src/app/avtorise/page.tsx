'use client'; // Убедитесь, что используете 'use client' для интерактивных компонентов
import React, {SetStateAction, useState} from 'react';
import { useRouter } from 'next/navigation'
import Input from '../componets/Input';
import Button from '../componets/Button';
import {router} from "next/client";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        if (username === 'Admin' && password === 'Passw0rd') {
            alert('Авторизация успешна!');
            router.replace('/homepage')
        } else {
            alert('Неверный логин или пароль');
        }
    };
    const handleUsernameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
    };

    const handlePasswordBlur = (e: { target: { value: SetStateAction<string>; }; }) => {
        console.log("Password on blur:", e.target.value);
    };

    return (
        <div style={{
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: 'url(/maxresdefault.jpg)',
            backgroundSize: 'cover',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
            }}>
                <h2>GAMEPOWER</h2>
        <div className="flex flex-col gap-4 w-full max-w-sm">

            <Input
                onChange={handleUsernameChange}
                onBlur={null}
                bgColor="bg-white"
                textColor="text-black"
                placeholder="Логин"
                isActive={true}
                position="mx-auto"
                type="username"
            />
            <Input
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                bgColor="bg-white"
                textColor="text-black"
                placeholder="Пароль"
                isActive={true}
                position="mx-auto"
                type="password"
            />

            <Button
                onClick={handleLogin}
                bgColor="bg-green-500"
                textColor="text-white"
                text="Войти"
                isActive={true}
                position="mx-auto"
            />
        </div>
            </div>
        </div>
    );
};

export default LoginPage;
