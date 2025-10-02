import React, { useState } from 'react';
import Logo from '../../../img/NexusCraftLogo.png';
import { Link } from 'react-router-dom';
import api from '../../../api/apis';
import { useNavigate } from 'react-router-dom';

export const RegisterForm=()=>{
    const [formData, setFormData] = useState({
        // name: '',
        email: '',
        username: '',
        // birthDate: '',
        password: '',
        confirmPassword: ''
    });
    
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData({
          ...formData,
          [name]: value,
        });
    
        setErrors({
          ...errors,
          [name]: '', // Limpiamos el error al cambiar el campo
        });
    };
    
    const validate = () => {
        const newErrors = {};
    
        // if (!formData.name) newErrors.name = 'El nombre es obligatorio';
    
        if (!formData.email) {
          newErrors.email = 'El correo es obligatorio';
        } 
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'El correo no es válido';
        }
    
        if (!formData.username) newErrors.username = 'El nombre de jugador es obligatorio';
    
        // if (!formData.birthDate) {
        //     newErrors.birthDate = 'La fecha de nacimiento es obligatoria';
        // } 
        // else{
        //     const today = new Date();
        //     const birthDate = new Date(formData.birthDate);
        //     const age = today.getFullYear() - birthDate.getFullYear();
        //     const monthDiff = today.getMonth() - birthDate.getMonth();
            
        //     if (age < 13 || (age === 13 && monthDiff < 0)) {
        //       newErrors.birthDate = 'Debes tener al menos 13 años';
        //     }
        // }
    
        if (!formData.password) {
            newErrors.password = 'La contraseña es obligatoria';
        } 
        else if (formData.password.length < 8) {
            newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
        } 
    
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'La confirmación de contraseña es obligatoria';
        } 
        else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden';
        }
    
        return newErrors;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);

        } else {
            const NEWUSER = new FormData();
            // NEWUSER.append('name', formData.name);
            NEWUSER.append('email', formData.email);
            NEWUSER.append('username', formData.username);
            // NEWUSER.append('birthday', formData.birthDate);
            NEWUSER.append('password', formData.password);

            try {
                await api.post('users/', NEWUSER);
                alert('¡Su cuenta ha sido registrada con exito!');
                navigate('/login');

            } catch (err) { 
                console.log((err.message));
            }
        };
    };
   

    return(
        <header className="register-hero-bg h-100vh py-2">
            <section>
                <div className="w-full flex flex-col items-center justify-center mx-auto rounded-lg shadow-md">
                    <img src={Logo} className='h-40' alt="NexusCraft" />
                    <form onSubmit={handleSubmit} className='md:w-96 w-80'>
                        {/* <div className="mb-4">
                            <label className="block text-sm font-medium text-white">Nombre <b className='text-red-500'>*</b></label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`mt-1 focus:border-color1 block w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
                        </div> */}

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white">Correo Electrónico <b className='text-red-500'>*</b></label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-1 focus:border-color1 block w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white">Nombre jugador <b className='text-red-500'>*</b></label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className={`mt-1 focus:border-color1 block w-full p-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.username && <p className="text-red-500 text-xs mt-2">{errors.username}</p>}
                        </div>

                        {/* <div className="mb-4">
                            <label className="block text-sm font-medium text-white">Fecha de Nacimiento <b className='text-red-500'>*</b></label>
                            <input
                                type="date"
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleChange}
                                className={`mt-1 focus:border-color1 block w-full p-2 border ${errors.birthDate ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.birthDate && <p className="text-red-500 text-xs mt-2">{errors.birthDate}</p>}
                        </div> */}

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white">Contraseña <b className='text-red-500'>*</b></label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`mt-1 focus:border-color1 block w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password}</p>}
                        </div>

                        <div className="mb-5">
                            <label className="block text-sm font-medium text-white">Confirmar Contraseña <b className='text-red-500'>*</b></label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`mt-1 focus:border-color1 block w-full p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-xs mt-2">{errors.confirmPassword}</p>}
                        </div>
                        
                        <div className='flex flex-col justify-center items-center'>
                        <button type='submit' className='btn-gradient hover:duration-300 duration-300 hover:scale-[105%] transition hover:transition inline-flex justify-center items-center py-3 px-5 text-base text-center w-full md:w-72 text-white rounded-lg'>Registrarse</button>
                            <p className="h-9 text-sm text-white mt-5">¿Ya tienes una cuenta? <Link to='/login' className='h-9 text-sm text-blue-500'>Iniciar sesión</Link></p>
                        </div>
                        
                    </form>
                </div>
            </section>              
        </header>
    );
}