import { Request, configureApiClient, Body } from '../common/apiClient';
import { isErrorModel } from '../response/error';
import { isLoginModel, LoginModel } from '../response/login';

interface LoginBody extends Body {
  email: string,
  password: string,
}

const PATH = '/login';
const HTTP_METHOD = 'post';

export const login = (body: LoginBody): LoginModel => {
  const request: Request = {
    path: PATH,
    httpMethod: HTTP_METHOD,
    body: body,
  };

  const response = configureApiClient(request);

  if (isErrorModel(response)) {
    throw response;
  }

  if (!isLoginModel(response)) {
    throw Error('Response Error');
  }

  return response;
};
