import { ResponseModel } from '../Common/responseModel';

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