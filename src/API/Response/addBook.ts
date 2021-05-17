export type AddBookModel = {
    status: number,
    result: AddBookResult,
};

type AddBookResult = {
    id: number,
    name: string,
    image?: string,
    price?: number,
    purchase_date?: string,
};