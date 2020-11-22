import api from './apiService';

const handleError = (error) => {
    // eslint-disable-next-line no-console
    console.log(error);
};

export const createShortLink = async (link) => {
    try {
        const response = await api.post('/shorten', {
            link,
        });

        return response.data;
    } catch (error) {
        handleError(error);

        return null;
    }
};
