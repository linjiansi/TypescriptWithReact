import { ResponseModel } from '../common/responseModel';

export interface ErrorModel extends ResponseModel {
    status: number,
    massage: string[]
}

export const isErrorModel = (arg: unknown): arg is ErrorModel => {
    const model = arg as ErrorModel;

    return (
        typeof model.status === 'number' &&
        isMessage(model.massage)
    );
};

const isMessage = (arg: string[]) =>
    arg.some((arg) => typeof arg === 'string');
