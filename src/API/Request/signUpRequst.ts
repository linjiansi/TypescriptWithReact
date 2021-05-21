import { Request, configureApiClient, Body } from '../common/apiClient';
import { isErrorModel } from '../response/error';
import { isSignUpModel, SignUpModel } from '../response/signUp';

export interface SignUpBody extends Body {
  email: string,
  password: string,
}

const PATH = '/sign_up';
const HTTP_METHOD = 'post';

export const signUp = (body: SignUpBody): SignUpModel => {
  const request: Request = {
    path: PATH,
    httpMethod: HTTP_METHOD,
    body: body,
  };

  const response = configureApiClient(request);

  if (isErrorModel(response)) {
    throw response;
  }

  if (!isSignUpModel(response)) {
    throw Error('Response Error');
  }

  return response;
};
