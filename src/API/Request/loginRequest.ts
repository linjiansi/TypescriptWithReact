import { Request, configureApiClient, Body } from '../common/apiClient';
import { isLoginModel } from '../response/login';

interface LoginBody extends Body {
  email: string,
  password: string,
}

const PATH = '/login';
const HTTP_METHOD = 'post';

export const login = (body: LoginBody) => {
  const request: Request = {
    path: PATH,
    httpMethod: HTTP_METHOD,
    body: body,
  };

  const response = configureApiClient(request);

  if (isLoginModel(response)) {
    throw Error('Response Error');
  }

  return response;
};
