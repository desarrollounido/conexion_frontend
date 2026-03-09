import api from './api';

export const getUsuario = async () => {
    try {
        const response = await api.get('usuario');
        return response;
    } catch (error) {
        console.error('Error fetching usuario:', error);
        throw error;
    }
};

export const getUsuarioById = async (id) => {
    try {
        const response = await api.get(`usuario/${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching usuario:', error);
        throw error;

    }
};

export const createUsuario = async (data) => {
    try {
        const response = await api.post('usuario', data);
        return response;
    } catch (error) {
        console.error('Error creating usuario:', error);
        throw error;
    }
};

export const updateUsuario = async (id, data) => {
    try {
        const response = await api.put(`usuario/${id}`, data);
        return response;
    } catch (error) {
        console.error('Error updating usuario:', error);
        throw error;
    }
};

export const deleteUsuario = async (id) => {
    try {
        const response = await api.delete(`usuario/${id}`);
        return response;
    } catch (error) {
        console.error('Error deleting usuario:', error);
        throw error;
    }           
};