import React from 'react';
import { HeaderComponent } from '../../molecules/Header/index';
import { BookListComponent } from '../../organisms/BookList/index';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './style';

export function HomeRouter() {
  const classes = useStyles();

  return (
    <>
      <HeaderComponent headerType={'main'}></HeaderComponent>
      <Paper elevation={8} className={classes.paper}>
        <BookListComponent></BookListComponent>
      </Paper>
    </>
  );
}
