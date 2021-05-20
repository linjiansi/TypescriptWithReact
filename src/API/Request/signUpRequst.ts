import { Request, configureApiClient, Body } from '../Common/apiClient';

interface SignUpBody extends Body {
  email: string,
  password: string,
}

const PATH = '/sign_up';
const HTTP_METHOD = 'post';

export const signUp = (body: SignUpBody) => {
  const request: Request = {
    path: PATH,
    httpMethod: HTTP_METHOD,
    body: body,
  };

  return configureApiClient(request);
}
