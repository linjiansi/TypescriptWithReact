import React from 'react';
import { InputBookComponent } from '../../molecules/InputBook/index';
import { HeaderComponent } from '../../molecules/Header/index';

type Props = {
  bookMode: BookMode;
};

const BookMode = {
  edit: 'EDIT',
  add: 'ADD',
} as const;

export type BookMode = typeof BookMode[keyof typeof BookMode];

export function BookScreenComponent(props: Props) {
  const { bookMode } = props;

  return (
    <form id={bookMode}>
      <HeaderComponent
        headerType={bookMode == BookMode.edit ? 'EDIT_BOOK' : 'ADD_BOOK'}
        buttonForm={bookMode}
      ></HeaderComponent>
      <InputBookComponent></InputBookComponent>
    </form>
  );
}
