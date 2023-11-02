import axiosClient from './axiosClient';

const URLAUTH = '/auth';
const URLUSER = '/user';

const accountApi = {
    postRegisterAccount: async (firstname, lastname, email, password) => {
        try {
            const response = await axiosClient.post(`${URLAUTH}/signup`, { firstname, lastname, email, password });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    postLogin: async (email, password) => {
        try {
            const response = await axiosClient.get(`${URLAUTH}/login`, { email, password });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};

export default accountApi;