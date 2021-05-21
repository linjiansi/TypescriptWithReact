import { type } from 'os';
import { ResponseModel } from '../common/responseModel';

export interface AddBookModel extends ResponseModel {
    status: number,
    result: AddBookResult,
}

type AddBookResult = {
    id: number,
    name: string,
    image?: string,
    price?: number,
    purchase_date?: string,
};

export const isAddBook = (arg: unknown): arg is AddBookModel => {
    const model = arg as AddBookModel;
    const result = model.result;

    return (
        typeof model.status === 'number' &&
        isResult(result)
    );
};

const isResult = (arg: AddBookResult) => {
    return (
        typeof arg.id === 'number' &&
        typeof arg.name === 'string' &&
        typeof arg.image === 'string' &&
        typeof arg.price === 'string' &&
        typeof arg.purchase_date === 'string'
    );
};
