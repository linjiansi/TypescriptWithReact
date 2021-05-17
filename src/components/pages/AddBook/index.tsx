import React from 'react';
import Header from '../../molecules/Header/index';
import BookScreen from '../../organisms/BookScreen/index';
import Paper from '@material-ui/core/Paper';
import { PaperContainer, useStyles } from './style';

export default function AddBook() {
  const classes = useStyles();

  return (
    <>
      <Header headerType={'main'}></Header>
      <PaperContainer>
        <Paper elevation={8} className={classes.paper}>
          <BookScreen bookMode="add"></BookScreen>
        </Paper>
      </PaperContainer>
    </>
  );
}
