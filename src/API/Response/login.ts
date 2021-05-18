import { ResponseModel } from '../Common/responseModel';

export interface LoginModel extends ResponseModel {
    status: number,
    result: LoginResult,
}

type LoginResult = {
    id: number,
    email: string,
    token: string,
};
