import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HeaderComponent } from '../../molecules/Header/index';
import { BookCardComponent } from '../../molecules/BookCard/index';
import { Link } from 'react-router-dom';

// TODO UIでのみ使用
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function BookListComponent() {
  return (
    <>
      <HeaderComponent headerType={'bookList'}></HeaderComponent>
      <Grid container spacing={4}>
        {cards.map((card, index) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Link to={`/edit/${index}`}><BookCardComponent bookName={'hogehoge'}></BookCardComponent></Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
