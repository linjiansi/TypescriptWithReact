import React from 'react';
import { InputBookComponent } from '../../molecules/InputBook/index';
import { HeaderComponent } from '../../molecules/Header/index';

type Props = {
  bookMode: BookMode;
};

export type BookMode = 'EDIT' | 'ADD';

export function BookScreenComponent(props: Props) {
  const { bookMode } = props;

  return (
    <form id={bookMode}>
      <HeaderComponent
        headerType={bookMode == 'EDIT' ? 'EDIT_BOOK' : 'ADD_BOOK'}
        buttonForm={bookMode}
      ></HeaderComponent>
      <InputBookComponent></InputBookComponent>
    </form>
  );
}
