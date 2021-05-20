import { KyHeadersInit } from 'ky/distribution/types/options';
import { Request, configureApiClient, Body } from '../Common/apiClient';

interface AddBookBody extends Body {
  name: string,
  price?: number,
  purchaseDate?: string,
  image?: string,
}

const PATH = '/add';
const HTTP_METHOD = 'post';
const TOKEN = localStorage.getItem('token');
const HEADER: KyHeadersInit = { token: `${TOKEN}` }

const addBook = (body: AddBookBody) => {
  const request: Request = {
    path: PATH,
    httpMethod: HTTP_METHOD,
    body: body,
    headers: HEADER,
  };

  return configureApiClient(request);
}
