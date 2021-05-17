import React from 'react';
import Header from '../../molecules/Header/index';
import BookScreen from '../../organisms/BookScreen/index';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: theme.spacing(8),
    },
  })
);

const PaperContainer = styled.div`
  width: 800px;
  margin: 0 auto;
`;

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
