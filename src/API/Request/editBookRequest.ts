import { KyHeadersInit } from 'ky/distribution/types/options';
import { Request, configureApiClient, Body } from '../common/apiClient';
import { EditBookModel, isEditBookModel } from '../response/editBook';

interface EditBookBody extends Body {
  name: string,
  price?: number,
  purchaseDate?: string,
  image?: string,
}

const HTTP_METHOD = 'put';
const TOKEN = localStorage.getItem('token');
const HEADER: KyHeadersInit = { token: `${TOKEN}` };

export const editBook = (body: EditBookBody, id: number): EditBookModel => {
  const PATH = `books/${id}`;
  const request: Request = {
    path: PATH,
    httpMethod: HTTP_METHOD,
    body: body,
    headers: HEADER,
  };

  const response = configureApiClient(request);

  if (!isEditBookModel(response)) {
    throw Error('Response error');
  }

  return response;
};
