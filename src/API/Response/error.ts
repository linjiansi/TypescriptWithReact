import { ResponseModel } from '../common/responseModel';

export interface Error extends ResponseModel {
    status: number,
    massage: string[]
}
