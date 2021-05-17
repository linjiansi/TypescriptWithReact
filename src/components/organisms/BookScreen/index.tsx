import React from 'react';
import InputBook from '../../molecules/InputBook/index';
import Header from '../../molecules/Header/index';

type Props = {
  bookMode: BookMode;
};

export type BookMode = 'edit' | 'add';

export default function BookScreen(props: Props) {
  const { bookMode } = props;
  return (
    <>
      <Header headerType={bookMode == 'edit' ? 'editBook' : 'addBook'}></Header>
      <InputBook></InputBook>
    </>
  );
}
