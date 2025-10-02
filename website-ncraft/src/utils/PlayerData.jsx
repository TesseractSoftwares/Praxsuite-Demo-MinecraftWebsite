import api from '../api/apis';
import { useState, useEffect } from 'react';

const PlayerData = () => {
    const [user, setUser] = useState(null);

    const fetchCurrentUser = async () => {
        try {
            const token = localStorage.getItem("access_token");

            const clientData = await api.get("me/profile/", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUser(clientData.data);

        } catch (err) {
            // console.error("Error obteniendo usuario:", err.response?.data || err);
            if (err.response?.data || err) {
                localStorage.removeItem("access_token");
            };
        };
    };

    useEffect(() => {
        fetchCurrentUser();
    }, [user]);

    return user;
};

export default PlayerData;