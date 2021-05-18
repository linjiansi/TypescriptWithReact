import { ResponseModel } from '../Common/responseModel';

export interface Error extends ResponseModel {
    status: number,
    massage: string[]
}