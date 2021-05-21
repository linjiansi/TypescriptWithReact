import { KyHeadersInit } from 'ky/distribution/types/options';
import { Request, configureApiClient, Body } from '../common/apiClient';
import { BooksListModel, isBooksListModel } from '../response/booksList';

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

export const getBooksList = (body: BooksListBody = DEFAULT_BOOKSLIST_BODY): BooksListModel => {
  const request: Request = {
    path: PATH,
    httpMethod: HTTP_METHOD,
    body: body,
    headers: HEADER,
  };

  const response = configureApiClient(request);

  if (!isBooksListModel(response)) {
    throw Error('Response error');
  }

  return response;
};
