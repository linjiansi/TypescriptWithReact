import { ResponseModel } from '../common/responseModel';

export interface EditBookModel extends ResponseModel {
    status: number,
    result: EditBookResult,
}

type EditBookResult = {
    id: number,
    name: string,
    image?: string,
    price?: number,
    purchase_date?: string,
};

export const isEditBook = (arg: unknown): arg is EditBookModel => {
    const model = arg as EditBookModel;
    const result = model.result;

    return (
        typeof model.status === 'number' &&
        isResult(result)
    );
};

const isResult = (arg: EditBookResult) => {
    return (
        typeof arg.id === 'number' &&
        typeof arg.name === 'string' &&
        typeof arg.image === 'string' &&
        typeof arg.price === 'string' &&
        typeof arg.purchase_date === 'string'
    );
};
