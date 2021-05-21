import { ResponseModel } from '../common/responseModel';

export interface Error extends ResponseModel {
    status: number,
    massage: string[]
}

export const isError = (arg: unknown): arg is Error => {
    const model = arg as Error;

    return (
        typeof model.status === 'number' &&
        isMessage(model.massage)
    );
};

const isMessage = (arg: string[]) =>
    arg.some((arg) => typeof arg === 'string');
