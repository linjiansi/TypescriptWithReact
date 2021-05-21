import { ResponseModel } from '../common/responseModel';

export interface BooksListModel extends ResponseModel {
    status: number,
    result: BookListResult[],
    total_count: number,
    total_pages: number,
    current_page: number,
    limit: number,
}

type BookListResult = {
    id: number,
    name: string,
    image?: string,
    price?: number,
    purchase_date?: string,
};

export const isBooksList = (arg: unknown): arg is BooksListModel => {
    const model = arg as BooksListModel;
    const result = model.result;

    return (
        typeof model.status === 'number' &&
        typeof model.total_count === 'number' &&
        typeof model.total_pages === 'number' &&
        typeof model.limit === 'number' &&
        isResult(result)
    )
};

const isResult = (arg: BookListResult[]) => {
    return arg.some((arg) =>
        typeof arg.id === 'number' &&
        typeof arg.name === 'string' &&
        typeof arg.image === 'string' &&
        typeof arg.price === 'number' &&
        typeof arg.purchase_date === 'string'
    );
};
