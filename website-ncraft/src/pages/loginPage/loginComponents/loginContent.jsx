import React, { useState } from 'react';
import Logo from '../../../img/NexusCraftLogo.png';

export const LoginForm=()=>{
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({});
    const [keepLoggedIn, setKeepLoggedIn] = useState(false); // Nuevo estado para el checkbox

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
    
    const handleCheckboxChange = () => {
        setKeepLoggedIn(!keepLoggedIn); // Cambia el estado del checkbox
    };

    const validate = () => {
        const newErrors = {};
    
        if (!formData.email) {
          newErrors.email = 'El correo es obligatorio';
        } 
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'El correo no es válido';
        }
    
        if (!formData.password) {
            newErrors.password = 'La contraseña es obligatoria';
        } 
        else if (formData.password.length < 8) {
            newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
        } 
    
        return newErrors;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } else {
          // Aquí puedes enviar los datos del formulario
          console.log('Formulario enviado:', formData);
          console.log('Mantener sesión iniciada:', keepLoggedIn); // Muestra el estado del checkbox
        }
    };

    return(
        <header className="register-hero-bg h-100vh">
            <section>
                <div className="w-full flex flex-col items-center justify-center mx-auto rounded-lg shadow-md">
                    <img src={Logo} className='h-44' alt="NexusCraft" />
                    <form onSubmit={handleSubmit} className='w-80'>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white">Correo Electrónico</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-1 focus:border-color1 block w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white">Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`mt-1 focus:border-color1 block w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                        </div>
                        
                        <div className="mb-4 flex items-center">
                            <input
                                type="checkbox"
                                name="keepLoggedIn"
                                checked={keepLoggedIn}
                                onChange={handleCheckboxChange}
                                className="mr-2 rounded-sm"
                            />
                            <label className="text-sm text-white">Mantener sesión iniciada</label>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <button type="submit" className="h-11 mb-3 btn-gradient w-64 text-white">
                                Iniciar sesión
                            </button>
                            <p class="h-9 text-sm text-white">¿No tiene una cuenta? <span className='h-9 text-sm text-blue-400'>Regístrate aquí</span></p>
                        </div>
                        
                    </form>
                </div>
            </section>
                
        </header>
    );
}