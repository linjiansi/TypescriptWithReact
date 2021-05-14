import React, { useRef } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import VisilityIcon from '@material-ui/icons/Visibility';
import VisilityIconOff from '@material-ui/icons/VisibilityOff';
import FormControll from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import { OutlinedInput } from '@material-ui/core';
import styled from 'styled-components';

type Props = {
    textFieldType: TextFieldType;
};

export type TextFieldType = 'email' |
                            'password' |
                            'confirmPassword' |
                            'bookName' |
                            'bookPrice' |
                            'purchaseDate';

interface State extends TextField {
    mailValidate: boolean;
    passwordValidate: boolean;
    showIcon: boolean;
    showPassword: boolean;
}

interface TextField {
    email: string;
    password: string;
    confirmPassword: string;
    bookName: string;
    bookPrice: number;
    purchaseDate: string;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
        textField: {
            width: '30ch',
        }
    })
);

const TextFieldContainer = styled.div`
    align-items: center;
`;

const returnOutlinedtextFieldType = (textFieldType: TextFieldType) => {
    switch (textFieldType) {
        case 'email':
            return 'email';
            break;
        case 'purchaseDate':
            return 'date';
            break;
        default:
            return 'text';
    }
};

const returnOutlinedInputValue = (value: TextField, textFieldType: TextFieldType) => {
    switch (textFieldType) {
        case 'email':
            return value.email;
            break;
        case 'password':
            return value.password;
            break;
        case 'confirmPassword':
            return value.confirmPassword;
            break;
        case 'bookName':
            return value.bookName;
            break;
        case 'bookPrice':
            return value.bookPrice;
            break;
        case 'purchaseDate':
            return value.purchaseDate;
            break;
    }
};

const returnInputLabel = (textFieldType: TextFieldType) => {
    switch (textFieldType) {
        case 'email':
            return 'メールアドレス';
            break;
        case 'password':
            return 'パスワード';
            break;
        case 'confirmPassword':
            return 'もう一度確認';
            break;
        case 'bookName':
            return '書籍名';
            break;
        case 'bookPrice':
            return '値段';
            break;
        case 'purchaseDate':
            return '';
            break;
    }
};

const returnTextFieldLabelWidth = (textFieldType: TextFieldType) => {
    switch (textFieldType) {
        case 'email':
            return 110;
            break;
        case 'password':
            return 80;
            break;
        case 'confirmPassword':
            return 100;
            break;
        case 'bookName':
            return 50;
            break;
        case 'bookPrice':
            return 40;
            break;
        case 'purchaseDate':
            return 0;
            break;
    }
};

const checktextFieldType = (textFieldType: TextFieldType) => {
    return (textFieldType == 'password') || (textFieldType == 'confirmPassword')
};

export default function TextField(props: Props) {
    const classes = useStyles();
    const { textFieldType } = props;
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        confirmPassword: '',
        bookName: '',
        bookPrice: 0,
        purchaseDate: '',
        mailValidate: true,
        passwordValidate: true,
        showIcon: false,
        showPassword: checktextFieldType(textFieldType),
    });
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const renderPasswordIcon = () => {
        return (
            <InputAdornment position="end">
                <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                >
                {values.showPassword ? <VisilityIcon /> : <VisilityIconOff />}
                </IconButton>
            </InputAdornment>
        );
    };

    const validate = () => {
        if (textFieldType == 'password' || textFieldType == 'email' || textFieldType == 'confirmPassword') {
            const ref = inputRef.current;
            if (ref !== null) {
                return !ref.validity.valid
            }
        }
        return false;
    };

    const textFieldClass = classNames(classes.margin, classes.textField);

    return (
        <TextFieldContainer>
            <FormControll className={textFieldClass} variant="outlined">
                <InputLabel htmlFor='outlined'>{returnInputLabel(textFieldType)}</InputLabel>
                <OutlinedInput
                    error={validate()}
                    id="outlined"
                    type={values.showPassword ? 'password' : returnOutlinedtextFieldType(textFieldType)}
                    value={returnOutlinedInputValue(values, textFieldType)}
                    onChange={handleChange(textFieldType)}
                    endAdornment={
                        (textFieldType == 'password') || (textFieldType == 'confirmPassword') ? renderPasswordIcon() : undefined
                    }
                    labelWidth={returnTextFieldLabelWidth(textFieldType)}
                    inputRef={inputRef}
                    inputProps={{ minlength: 6 }}
                />
            </FormControll>
        </TextFieldContainer>
    )
}
