import ky from 'ky';

export const configureKy = ky.create({
    prefixUrl: process.env.REACT_APP_API_IP,
    timeout: 300000,
    retry: 2,
    headers: {
        contentType: 'application/json',
    }
});