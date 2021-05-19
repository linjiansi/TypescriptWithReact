import React from 'react';
import { TextFieldComponent } from '../../atoms/TextField/index';
import { ButtonComponent } from '../../atoms/Button/index';
import { IconComponent } from '../../atoms/Icon/index';
import { Link } from 'react-router-dom';
import { Container } from './style';

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

export function AuthComponent(props: Props) {
  const { authType } = props;

  const renderComponentByAuthType = (authType: AuthType) => {
    switch (authType) {
      case 'login':
        return (
          <>
            {' '}
            <Link to={'/'}>
              <ButtonComponent useCase={'auth'}>{returnAuthType(authType)}</ButtonComponent>
            </Link>
            <Link to={'/sign-up'}>
              <ButtonComponent useCase={'auth'}>{'サインアップへ'}</ButtonComponent>
            </Link>
          </>
        );
      case 'signUp':
        return (
          <>
            <TextFieldComponent textFieldType="confirmPassword"></TextFieldComponent>
            <Link to={'/'}>
              <ButtonComponent useCase={'auth'}>{returnAuthType(authType)}</ButtonComponent>
            </Link>
          </>
        );
    }
  };

  return (
    <Container>
      <IconComponent></IconComponent>
      <h2>{returnAuthType(authType)}</h2>
      <TextFieldComponent textFieldType={'email'}></TextFieldComponent>
      <TextFieldComponent textFieldType={'password'}></TextFieldComponent>
      {renderComponentByAuthType(authType)}
    </Container>
  );
}
