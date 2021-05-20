import { KyHeadersInit } from 'ky/distribution/types/options';
import { Request, configureApiClient } from '../common/apiClient';

const PATH = '/logout';
const HTTP_METHOD = 'delete';
const TOKEN = localStorage.getItem('token');
const HEADER: KyHeadersInit = { token: `${TOKEN}` };

export const logout = () => {
  const request: Request = {
    path: PATH,
    httpMethod: HTTP_METHOD,
    headers: HEADER,
  };

  return configureApiClient(request);
}
