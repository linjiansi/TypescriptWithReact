import { KyHeadersInit } from 'ky/distribution/types/options';
import { Request, configureApiClient, Body } from '../common/apiClient';
import { AddBookModel, isAddBookModel } from '../response/addBook';
import { isErrorModel } from '../response/error';

interface AddBookBody extends Body {
  name: string,
  price?: number,
  purchaseDate?: string,
  image?: string,
}

const PATH = '/books';
const HTTP_METHOD = 'post';
const TOKEN = localStorage.getItem('token');
const HEADER: KyHeadersInit = { token: `${TOKEN}` };

export const addBook = (body: AddBookBody): AddBookModel => {
  const request: Request = {
    path: PATH,
    httpMethod: HTTP_METHOD,
    body: body,
    headers: HEADER,
  };

  const response = configureApiClient(request);

  if (isErrorModel(response)) {
    throw response;
  }

  if (!isAddBookModel(response)) {
    throw Error("Response Error");
  }

  return response;
};
