import { ResponseModel } from '../common/responseModel';

export interface LoginModel extends ResponseModel {
    status: number,
    result: LoginResult,
}

type LoginResult = {
    id: number,
    email: string,
    token: string,
};

export const isLoginModel = (arg: unknown): arg is LoginModel => {
    const model = arg as LoginModel;
    const result = model.result;

    return (
        typeof model.status === 'number' &&
        isResult(result)
    );
};

const isResult = (arg: LoginResult) => {
    return (
        typeof arg.id === 'number' &&
        typeof arg.email === 'string' &&
        typeof arg.token === 'string'
    );
};
