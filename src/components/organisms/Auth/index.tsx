import React, { useState } from 'react';
import { TextFieldComponent } from '../../molecules/TextField/index';
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
  const [mailError, setMailError] = useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<boolean>(true);
  const [confirmError, setConfirmError] = useState<boolean>(true);

  const isTextFieldValid = () => {
    return (
    authType == 'signUp' ?
      mailError || passwordError || confirmError :
      mailError || passwordError
    );
  }

  const renderDisabableButtonComponent = () => {
    return (
      isTextFieldValid() ?
        <ButtonComponent useCase={'auth'}
                         form={authType}
                         disabled={isTextFieldValid()}
        >{returnAuthType(authType)}</ButtonComponent> :
        <Link to={'/'}>
            <ButtonComponent useCase={'auth'}
                             form={authType}
                             buttonType='submit'
                             disabled={isTextFieldValid()}
            >{returnAuthType(authType)}</ButtonComponent>
        </Link>
    );
  };

  const renderComponentByAuthType = (authType: AuthType) => {
    switch (authType) {
      case 'login':
        return (
          <>
            {/* <MemoryRouter> */}
            {renderDisabableButtonComponent()}
            {/* </MemoryRouter> */}
            {/* <MemoryRouter> */}
              <Link to={'/sign-up'}>
                <ButtonComponent useCase={'auth'}
                                 disabled={false}
                >{'サインアップへ'}</ButtonComponent>
              </Link>
            {/* </MemoryRouter> */}
          </>
        );
      case 'signUp':
        return (
          <>
            <TextFieldComponent textFieldType='CONFIRM_PASSWORD'
                                password={password}
                                setError={setConfirmError}
            ></TextFieldComponent>
            {/* <MemoryRouter> */}
            {renderDisabableButtonComponent()}
            {/* </MemoryRouter> */}
          </>
        );
    }
  };

  return (
    <Container>
      <IconComponent></IconComponent>
      <h2>{returnAuthType(authType)}</h2>
      <form id={authType}>
        <TextFieldComponent textFieldType='EMAIL'
                            setText={setEmail}
                            setError={setMailError}></TextFieldComponent>
        <TextFieldComponent textFieldType='PASSWORD'
                            setText={setPassword}
                            setError={setPasswordError}
        ></TextFieldComponent>
        {renderComponentByAuthType(authType)}
      </form>
    </Container>
  );
}
