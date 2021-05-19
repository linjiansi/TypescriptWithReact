import React from 'react';
import { AuthComponent } from '../../organisms/Auth/index';
import Paper from '@material-ui/core/Paper';
import { PaperContainer, Title } from './style';

export function LoginRouter() {
  return (
    <>
      <Title>Book Manager</Title>
      <PaperContainer>
        <Paper elevation={8}>
          <AuthComponent authType={'login'}></AuthComponent>
        </Paper>
      </PaperContainer>
    </>
  );
}
