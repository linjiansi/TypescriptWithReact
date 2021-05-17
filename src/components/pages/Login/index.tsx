import React from 'react';
import Auth from '../../organisms/Auth/index';
import Paper from '@material-ui/core/Paper';
import { PaperContainer, Title } from './style';

export default function Login() {
  return (
    <>
      <Title>Book Manager</Title>
      <PaperContainer>
        <Paper elevation={8}>
          <Auth authType={'login'}></Auth>
        </Paper>
      </PaperContainer>
    </>
  );
}
