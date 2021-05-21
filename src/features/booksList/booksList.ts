import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BooksListModel } from "../../api/response/booksList";

export type BooksListState = { booksList?: BooksListModel };
const initialState: BooksListState = { booksList: undefined };

export const booksListSlice = createSlice({
  name: 'booksList',
  initialState,
  reducers: {
    gotBooksList: (state, action: PayloadAction<{ booksList: BooksListModel | undefined }>) => ({
      ...state,
      booksList: action.payload.booksList,
      error: null,
    }),
  },
});
