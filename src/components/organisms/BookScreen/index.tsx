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
    <form id={bookMode}>
      <HeaderComponent
        headerType={bookMode == 'edit' ? 'editBook' : 'addBook'}
        buttonForm={bookMode}
      ></HeaderComponent>
      <InputBookComponent></InputBookComponent>
    </form>
  );
}
