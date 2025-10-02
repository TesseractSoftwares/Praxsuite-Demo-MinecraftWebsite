import { useState } from 'react';
import Logo from '../../../img/NexusCraftLogo.png';
import { Link } from 'react-router-dom';
import api from '../../../api/apis';
import { useNavigate } from 'react-router-dom';

export const LoginForm=()=>{
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData({
          ...formData,
          [name]: value,
        });
    
        setErrors({
          ...errors,
          [name]: '',
        });
    };

    const validate = () => {
        const newErrors = {};
    
        if (!formData.username) {
          newErrors.username = 'Este campo es obligatorio';
        } 

        if (!formData.password) {
            newErrors.password = 'Este campo es obligatorio';
        } 
    
        return newErrors;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
          
        } else {
            try {
                const client = await api.post('token/', formData);

                localStorage.setItem("access_token", client.data.access);
                localStorage.setItem("refresh_token", client.data.refresh);

                alert('¡Sesión iniciada!');
                navigate('/');

            } catch (err) { 
                if (err.response) {
                    setServerError(err.response.data.detail)
                    console.log('Error: ' + err.response.data.detail);
                    
                } else {
                    console.log('Error de conexión con el servidor.');
                };
            };
        };
    };

    return(
        <header className="register-hero-bg h-100vh">
            <section>
                <div className="w-full flex flex-col items-center justify-center mx-auto rounded-lg">
                    <img src={Logo} className='h-44 mb-2' alt="NexusCraft" />
                    <form onSubmit={handleSubmit} className='md:w-96 w-80'>

                        <div className="">
                            <label className="block text-sm font-medium text-white">Nombre de usuario <b className='text-red-500'>*</b></label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className={`mt-1 focus:border-color1 block w-full p-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.username && <p className="text-red-500 text-base mt-2">{errors.username}</p>}
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium text-white">Contraseña <b className='text-red-500'>*</b></label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`mt-1 focus:border-color1 block w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.password && <p className="text-red-500 text-base mt-2">{errors.password}</p>}
                        </div>
                        
                        <p className="text-red-500 text-base mt-3">{serverError}</p>
                        
                        {/* <div className="mb-4 flex items-center">
                            <input
                                type="checkbox"
                                name="keepLoggedIn"
                                checked={keepLoggedIn}
                                onChange={handleCheckboxChange}
                                className="mr-2 rounded-sm"
                            />
                            <label className="text-sm text-white">Mantener sesión iniciada</label>
                        </div> */}

                        <div className='flex flex-col justify-center items-center mt-5'>
                            <button type='submit' className='btn-gradient hover:duration-300 duration-300 hover:scale-[105%] transition hover:transition inline-flex justify-center items-center py-3 px-5 text-base text-center w-full md:w-72 text-white rounded-lg'>Iniciar sesión</button>
                            <p className="text-sm mt-5 text-white">¿No tiene una cuenta? <Link to='/register' className='h-9 text-sm text-blue-500'>Regístrate aquí</Link></p>
                            <Link to='/forgotpassword' className='text-sm text-white hover:transition transition hover:text-blue-500 mt-2'>¿Olvidaste tu contraseña?</Link>
                        </div>
                        
                    </form>
                </div>
            </section>
                
        </header>
    );
}