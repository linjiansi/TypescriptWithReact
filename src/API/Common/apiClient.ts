import ky from 'ky';
import { KyHeadersInit } from 'ky/distribution/types/options';
import { ResponseModel } from '../Common/responseModel';

type HttpMethod = 'get' |
                  'post' |
                  'put' |
                  'delete';
export interface Body {}

export type Request = {
    path: string,
    httpMethod: HttpMethod,
    body?: Body,
    headers?: KyHeadersInit,
};

export const configureKy = ky.create({
    prefixUrl: process.env.REACT_APP_API_IP,
    timeout: 300000,
    retry: 2,
    headers: {
        contentType: 'application/json',
    },
});

export const configureApiClient = (request: Request) => {
    const extendedKy = configureKy.extend({
        method: request.httpMethod,
        json: request.body,
        headers: request.headers,
    })

    switch (request.httpMethod) {
        case 'get':
            return sendGet(extendedKy, request.path);
        case 'post':
            return sendPost(extendedKy, request.path);
        case 'put':
            return sendPut(extendedKy, request.path);
        case 'delete':
            return sendDelete(extendedKy, request.path);
    }
};

const sendGet = (ky: typeof configureKy, path: string) => {
    const response = ky.get(path).json();
    return response
};

const sendPost = (ky: typeof configureKy, path: string) => {
    const response = ky.post(path).json()
    return response
};

const sendPut = (ky: typeof configureKy, path: string) => {
    const response = ky.put(path).json();
    return response
};

const sendDelete = (ky: typeof configureKy, path: string) => {
    const response = ky.delete(path).json()
    return response
};
