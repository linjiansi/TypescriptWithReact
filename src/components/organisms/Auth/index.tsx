import React from 'react';
import TextField from '../../atoms/TextField/index';
import Button from '../../atoms/Button/index';
import { Icon } from '../../atoms/Icon/index';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type Props = {
  authType: AuthType;
};

export type AuthType = 'login' | 'signUp';

const returnAuthType = (authType: AuthType) => {
  switch (authType) {
    case 'login':
      return 'ログイン';
    case 'signUp':
      return 'サインアップ';
  }
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export default function Auth(props: Props) {
  const { authType } = props;

  const renderComponentByAuthType = (authType: AuthType) => {
    switch (authType) {
      case 'login':
        return (
          <>
            {' '}
            <Link to={'/'}>
              <Button useCase={'auth'}>{returnAuthType(authType)}</Button>
            </Link>
            <Link to={'/sign-up'}>
              <Button useCase={'auth'}>{'サインアップへ'}</Button>
            </Link>
          </>
        );
      case 'signUp':
        return (
          <>
            <TextField textFieldType="confirmPassword"></TextField>
            <Link to={'/'}>
              <Button useCase={'auth'}>{returnAuthType(authType)}</Button>
            </Link>
          </>
        );
    }
  };

  return (
    <Container>
      <Icon></Icon>
      <h2>{returnAuthType(authType)}</h2>
      <TextField textFieldType={'email'}></TextField>
      <TextField textFieldType={'password'}></TextField>
      {renderComponentByAuthType(authType)}
    </Container>
  );
}
