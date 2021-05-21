import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BooksListModel } from "../../api/response/booksList";
import { booksListSlice, BooksListState } from '../../features/booksList/booksList';
import { getBooksList } from '../../api/request/booksListRequest';
import { isErrorModel } from '../../api/response/error';

type ReturnValue = {
  bookList?: BooksListModel;
};

export const useGetBooksList = (page: number, limit: number): ReturnValue => {
  const booksList = useSelector<BooksListState, BooksListModel | undefined>((state) => state.booksList);
  const dispatch = useDispatch();

  useEffect(() => {
    let isUnmounted = false;
    const { gotBooksList } = booksListSlice.actions;
    const body = {
      page: page,
      limit: limit,
    };

    const load = async (): Promise<void> => {
      try {
        const booksList = await getBooksList(body);

        if (!isUnmounted) {
          dispatch(gotBooksList({ booksList }));
        }
      } catch (error) {
        if (isErrorModel(error)) {
          alert(error.massage);
        }
        alert(error);
      }
    };

    void load();

    return () => {
      isUnmounted = true;
    };
  },[page, limit, dispatch]);

  return booksList as ReturnValue
};
