import { Request, configureApiClient, Body } from '../common/apiClient';
import { isSignUpModel } from '../response/signUp';

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

  const response = configureApiClient(request);

  if (isSignUpModel(response)) {
    throw Error('Response Error');
  }

  return response;
};
