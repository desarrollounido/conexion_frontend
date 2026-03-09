import api from './api';



export const getUsuario = async () => {
    try {
        const response = await api.get('usuarios');
        return response;
    } catch (error) {
        console.error('Error fetching usuario:', error);
        throw error;
    }
};

export const getUsuarioById = async (id) => {
    try {
        const response = await api.get(`usuarios/${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching usuario:', error);
        throw error;

    }
};

export const createUsuario = async (data) => {
    try {
        const response = await api.post('usuarios', data);
        return response;
    } catch (error) {
        console.error('Error creating usuario:', error);
        throw error;
    }
};

export const updateUsuario = async (id, data) => {
    try {
        const response = await api.put(`usuarios/${id}`, data);
        return response;
    } catch (error) {
        console.error('Error updating usuario:', error);
        throw error;
    }
};

export const deleteUsuario = async (id) => {
    try {
        const response = await api.delete(`usuarios/${id}`);
        return response;
    } catch (error) {
        console.error('Error deleting usuario:', error);
        throw error;
    }           
};