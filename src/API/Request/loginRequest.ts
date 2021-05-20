import { Request, configureApiClient, Body } from '../Common/apiClient';

interface LoginBody extends Body {
  email: string,
  password: string,
}

const PATH = '/login';
const HTTP_METHOD = 'post';

export const addBook = (body: LoginBody) => {
  const request: Request = {
    path: PATH,
    httpMethod: HTTP_METHOD,
    body: body,
  };

  return configureApiClient(request);
}
