import { ResponseModel } from '../common/responseModel';

export interface SignUpModel extends ResponseModel {
    status: number,
    result: SignUpResult,
}

type SignUpResult = {
    id: number,
    email: string,
    token: string,
};
