import Logo from '../img/NexusCraftLogo.png';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const ForgotPasswordPage = () => {
    const emailRef = useRef(null);
    const [alert, setAlert] = useState('');

    const dummyusers = [
        { email: 'user1@prueba.com' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailValue = emailRef.current.value.trim();
    
        if (emailValue === '') {
            setAlert('Este campo es obligatorio');

            setTimeout(() => {
                setAlert('');
            }, 3000);
        };

        const emailExist = dummyusers.some((account) => account.email === emailValue);

        if (!emailExist) {
            setAlert('El correo no se encuentra registrado');

            setTimeout(() => {
                setAlert('');
            }, 3000);
            return;

        } else {
            setAlert('');
            return;
        };
    };

    return (
        <div className="register-hero-bg h-100vh py-2 bg-[linear-gradient(rgba(39,39,58,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(39,39,58,0.2)_1px,transparent_1px)] bg-[size:50px_50px] w-full h-screen flex items-center justify-center p-5">
            <div className="relative shadow-xl rounded-lg px-10 py-15 flex flex-col items-center justify-center w-96">

                <div className="flex items-center justify-center">
                    {<img
                        src={Logo}
                        alt="NexusLogo"
                        className='h-40'
                        priority
                    />}
                </div>

                <h2 className='text-center mb-5 text-2xl font-semibold text-white'>Recuperar contraseña</h2>

                <form onSubmit={handleSubmit} className="max-w-sm mx-auto w-full">
                    <div className="mb-2">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white ">Correo electrónico <b className='text-red-500'>*</b></label>
                        <input type="email" id="email" ref={emailRef} className="bg-white border border-gray-300 text-black text-sm rounded-md focus:ring-white focus:border-white transition focus:transition block w-full p-2.5" placeholder="email@example.com" required />
                    </div>

                    <p className='text-sm text-red-500'>{alert}</p>
                    
                    <div className="w-full mb-5 mt-5">
                        <button type='submit' className='hover:duration-300 duration-300 hover:scale-[105%] transition hover:transition btn-gradient inline-flex justify-center items-center py-3 px-5 text-base text-center w-full text-white rounded-lg'>Enviar</button>
                    </div>
                    <p className="text-center text-sm mt-5 text-white">¿Volver a <Link to='/login' className='h-9 text-sm text-blue-500'>Iniciar sesión</Link>?</p>
                </form>

            </div>
        </div>
    );
};