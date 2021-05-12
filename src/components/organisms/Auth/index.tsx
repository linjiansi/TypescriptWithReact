import React from 'react';
import TextField from '../../atoms/TextField/index';
import Button from '../../atoms/Button/index';
import { Icon } from '../../atoms/Icon/index';

type Props = {
    authType: AuthType
};

export type AuthType = 'login' | 'signUp';

const returnAuthType = (authType: AuthType) => {
    switch (authType) {
        case 'login':
            return 'ログイン';
            break;
        case 'signUp':
            return 'サインアップ';
            break;
    }
};

export default function Auth(props: Props) {
    const { authType } = props;

    const renderComponentByAuthType = (authType: AuthType) => {
        switch (authType) {
            case 'login':
                return (
                    <>
                        <Button>{returnAuthType(authType)}</Button>
                        <Button>{'サインアップへ'}</Button>
                    </>
                );
                break;
            case 'signUp':
                return (
                    <>
                        <TextField inputType='password'></TextField>
                        <Button>{returnAuthType(authType)}</Button>
                    </>
                );
        }
    };

    return (
        <div>
            <Icon></Icon>
            <h2>{returnAuthType(authType)}</h2>
            <TextField inputType={'email'}></TextField>
            <TextField inputType={'password'}></TextField>
            {renderComponentByAuthType(authType)}
        </div>
    );
}
