import { KyHeadersInit } from 'ky/distribution/types/options';
import { Request, configureApiClient, Body } from '../Common/apiClient';

interface BooksListBody extends Body {
  limit?: number,
  page?: number,
}

const PATH = '/books';
const HTTP_METHOD = 'get';
const TOKEN = localStorage.getItem('token');
const HEADER: KyHeadersInit = { token: `${TOKEN}` };
const DEFAULT_BOOKSLIST_BODY: BooksListBody = {
  limit: 20,
  page: 1,
};

export const getBooksList = (body: BooksListBody = DEFAULT_BOOKSLIST_BODY) => {
  const request: Request = {
    path: PATH,
    httpMethod: HTTP_METHOD,
    body: body,
    headers: HEADER,
  };

  return configureApiClient(request);
}
