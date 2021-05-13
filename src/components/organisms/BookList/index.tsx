import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../molecules/Header/index';
import BookCard from '../../molecules/BookCard/index';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function BookList() {
    return (
        <>
            <Header headerType={'bookList'}></Header>
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <BookCard bookName={'hogehoge'}></BookCard>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}