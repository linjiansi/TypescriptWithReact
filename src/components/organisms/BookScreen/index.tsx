import React from 'react';
import { InputBookComponent } from '../../molecules/InputBook/index';
import { HeaderComponent } from '../../molecules/Header/index';

type Props = {
  bookMode: BookMode;
};

export type BookMode = 'edit' | 'add';

export function BookScreenComponent(props: Props) {
  const { bookMode } = props;

  return (
    <>
      <HeaderComponent headerType={bookMode == 'edit' ? 'editBook' : 'addBook'}></HeaderComponent>
      <InputBookComponent></InputBookComponent>
    </>
  );
}
