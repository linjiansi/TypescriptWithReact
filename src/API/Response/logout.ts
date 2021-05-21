import { ResponseModel } from '../common/responseModel';
import { LoginModel } from './login';

export interface LogoutModel extends ResponseModel {
    status: number,
}

export const isLogoutModel = (arg: unknown): arg is LoginModel => {
    const model = arg as LoginModel;

    return typeof model.status === 'number';
};
