import { ResponseModel } from '../common/responseModel';

export interface SignUpModel extends ResponseModel {
    status: number,
    result: SignUpResult,
}

type SignUpResult = {
    id: number,
    email: string,
    token: string,
};

export const isSignUpModel = (arg: unknown): arg is SignUpModel => {
    const model = arg as SignUpModel;
    const result = model.result;

    return (
        typeof model.status === 'number' &&
        isResult(result)
    );
};

const isResult = (arg: SignUpResult) => {
    return (
        typeof arg.id === 'number' &&
        typeof arg.email === 'string' &&
        typeof arg.token === 'string'
    );
};
