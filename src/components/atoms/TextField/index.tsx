import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import VisilityIcon from '@material-ui/icons/Visibility';
import VisilityIconOff from '@material-ui/icons/VisibilityOff';
import FormControll from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import { OutlinedInput } from '@material-ui/core';

type Props = {
    inputType: TextFieldType;
};

export type TextFieldType = 'email' | 'password' | 'bookName' | 'bookPrice' | 'purchaseDate'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLable: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '25ch',
        }
    })
);

const returnOutlinedInputType = (inputType: TextFieldType) => {
    switch (inputType) {
        case 'email':
            return 'email';
            break;
        case 'password':
            return 'password';
            break;
        case 'purchaseDate':
            return 'date';
            break;
        default:
            return 'text';
    }
};

const returnOutlinedInputValue = (value: TextField, inputType: TextFieldType) => {
    switch (inputType) {
        case 'email':
            return value.email;
            break;
        case 'password':
            return value.password;
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

const returnInputLabel = (inputType: TextFieldType) => {
    switch (inputType) {
        case 'email':
            return 'メールアドレス';
            break;
        case 'password':
            return 'パスワード';
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

const returnTextFieldLabelWidth = (inputType: TextFieldType) => {
    switch (inputType) {
        case 'email':
            return 110;
            break;
        case 'password':
            return 80;
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

interface State extends TextField {
    mailValidate: boolean;
    passwordValidate: boolean;
    showIcon: boolean;
    showPassword: boolean;
}

interface TextField {
    email: string;
    password: string;
    bookName: string;
    bookPrice: number;
    purchaseDate: string;
}

export default function Field(props: Props) {
    const classes = useStyles();
    const { inputType } = props;
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        bookName: '',
        bookPrice: 0,
        purchaseDate: '',
        mailValidate: true,
        passwordValidate: true,
        showIcon: false,
        showPassword: false,
    });

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

    const textFieldClass = classNames(classes.margin, classes.textField);

    return (
        <FormControll className={textFieldClass} variant="outlined">
            <InputLabel htmlFor='outlined'>{returnInputLabel(inputType)}</InputLabel>
            <OutlinedInput
                id="outlined"
                type={returnOutlinedInputType(inputType)}
                value={returnOutlinedInputValue(values, inputType)}
                onChange={handleChange(inputType)}
                endAdornment={
                    inputType == 'password' ? renderPasswordIcon() : undefined
                }
                labelWidth={returnTextFieldLabelWidth(inputType)}
            />
        </FormControll>
    )
}
