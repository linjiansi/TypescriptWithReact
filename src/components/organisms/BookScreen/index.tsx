import React from 'react';
import InputBook from '../../molecules/InputBook/index'
import Header from '../../molecules/Header/index'

type Props = {
    bookMode: BookMode,
};

export type BookMode = 'edit' | 'add';

export default function BookScreen(props: Props) {
    const { bookMode } = props;
    return (
        <>
            <Header
                title={bookMode == 'edit' ? '書籍編集' : '書籍追加'}
                buttonTitle={bookMode == 'edit' ? 'UPDATE' : 'CREATE'}
            ></Header>
            <InputBook></InputBook>
        </>
    );
}