import React, { useState } from 'react';
import { TextFieldComponent } from '../../atoms/TextField/index';
import { ButtonComponent } from '../../atoms/Button/index';
import { IconComponent } from '../../atoms/Icon/index';
import { Link, MemoryRouter } from 'react-router-dom';
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
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const renderComponentByAuthType = (authType: AuthType) => {
    switch (authType) {
      case 'login':
        return (
          <>
            <MemoryRouter>
              <Link to={'/'}>
                <ButtonComponent useCase={'auth'} form={authType} buttonType='submit'>{returnAuthType(authType)}</ButtonComponent>
              </Link>
            </MemoryRouter>
            <MemoryRouter>
              <Link to={'/sign-up'}>
                <ButtonComponent useCase={'auth'}>{'サインアップへ'}</ButtonComponent>
              </Link>
            </MemoryRouter>
          </>
        );
      case 'signUp':
        return (
          <>
            <TextFieldComponent textFieldType="confirmPassword" password={password}></TextFieldComponent>
            <MemoryRouter>
              <Link to={'/'}>
                <ButtonComponent useCase={'auth'} form={authType} buttonType='submit'>{returnAuthType(authType)}</ButtonComponent>
              </Link>
            </MemoryRouter>
          </>
        );
    }
  };

  return (
    <Container>
      <IconComponent></IconComponent>
      <h2>{returnAuthType(authType)}</h2>
      <form id={authType}>
        <TextFieldComponent textFieldType={'email'} setText={setEmail}></TextFieldComponent>
        <TextFieldComponent textFieldType={'password'} setText={setPassword}></TextFieldComponent>
        {renderComponentByAuthType(authType)}
      </form>
    </Container>
  );
}
