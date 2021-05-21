import { KyHeadersInit } from 'ky/distribution/types/options';
import { Request, configureApiClient } from '../common/apiClient';
import { isErrorModel } from '../response/error';
import { isLoginModel } from '../response/login';
import { LogoutModel } from '../response/logout';

const PATH = '/logout';
const HTTP_METHOD = 'delete';
const TOKEN = localStorage.getItem('token');
const HEADER: KyHeadersInit = { token: `${TOKEN}` };

export const logout = (): LogoutModel => {
  const request: Request = {
    path: PATH,
    httpMethod: HTTP_METHOD,
    headers: HEADER,
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
