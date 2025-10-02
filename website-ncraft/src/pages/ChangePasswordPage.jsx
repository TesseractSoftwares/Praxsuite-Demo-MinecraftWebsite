import Logo from '../img/NexusCraftLogo.png';
import { useState } from 'react';


export const ChangePasswordPage = () => {
        
   const [formData, setFormData] = useState({
           password: '',
           confirmPassword: ''
       });
       
       const [errors, setErrors] = useState({});
       
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
       
       const handleSubmit = (e) => {
           e.preventDefault();
           const validationErrors = validate();
           if (Object.keys(validationErrors).length > 0) {
             setErrors(validationErrors);
           } else {
             // Aquí puedes enviar los datos del formulario
             console.log('Formulario enviado:', formData);
           }
       };
        

    return (
        <div className="register-hero-bg h-100vh py-2 w-full flex flex-col items-center justify-center mx-auto rounded-lg shadow-md">
                    <img src={Logo} className='h-40' alt="NexusCraft" />
                    <h2 className='text-center mb-5 text-2xl font-semibold text-white'>Cambiar Contraseña</h2>
                    <form onSubmit={handleSubmit} className='md:w-96 w-80'>
                        
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white">Nueva contraseña <b className='text-red-500'>*</b></label>
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
                            <label className="block text-sm font-medium text-white">Confirmar contraseña <b className='text-red-500'>*</b></label>
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
                        <button type='submit' className='btn-gradient inline-flex justify-center items-center py-3 px-5 text-base text-center w-full md:w-72 text-white rounded-lg'>Confirmar</button>
                        </div>
                        
                    </form>
        </div>
    );
};