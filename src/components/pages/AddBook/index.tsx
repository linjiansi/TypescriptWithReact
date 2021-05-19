import React from 'react';
import { HeaderComponent } from '../../molecules/Header/index';
import { BookScreenComponent } from '../../organisms/BookScreen/index';
import Paper from '@material-ui/core/Paper';
import { PaperContainer, useStyles } from './style';

export function AddBook() {
  const classes = useStyles();

  return (
    <>
      <HeaderComponent headerType={'main'}></HeaderComponent>
      <PaperContainer>
        <Paper elevation={8} className={classes.paper}>
          <BookScreenComponent bookMode="add"></BookScreenComponent>
        </Paper>
      </PaperContainer>
    </>
  );
}
