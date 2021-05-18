import ky from 'ky';
import { ResponseModel } from '../Common/responseModel';

type HttpMethod = 'get' |
                  'post' |
                  'put' |
                  'delete';
interface Body {}

interface Headers {}

export type Request = {
    path: string,
    httpMethod: HttpMethod,
    body?: Body,
    headers?: Headers,
};

export const configureKy = ky.create({
    prefixUrl: process.env.REACT_APP_API_IP,
    timeout: 300000,
    retry: 2,
    headers: {
        contentType: 'application/json',
    }
});

export const send = <T extends ResponseModel>(request: Request): Promise<T> => {

};