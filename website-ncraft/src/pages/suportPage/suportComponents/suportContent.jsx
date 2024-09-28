import { NavbarWeb } from "../../../components/navbar";
import React, { useState } from 'react';

export const Suport=()=>{
    return(
        <header>
            <NavbarWeb />
            <section>
                <div>
                    <p className="text-color1">Contactanos</p>
                    <p className="text-white">Unete a nuestro servidor de <span className="text-color1">Discord</span> para ayudarte a resolver tus dudas</p>
                    <button type="submit" className="h-11 mb-3 btn-gradient w-64 text-white">
                        unirse al servidor
                    </button>
                </div>
                <div>

                </div>
            </section>
        </header>
    );
}