export type EditBookModel = {
    status: number,
    result: EditBookResult,
};

type EditBookResult = {
    id: number,
    name: string,
    image?: string,
    price?: number,
    purchase_date?: string,
};