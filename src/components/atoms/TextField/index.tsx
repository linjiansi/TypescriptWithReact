import React, { useState, useRef, Dispatch, SetStateAction } from 'react';
import VisilityIcon from '@material-ui/icons/Visibility';
import VisilityIconOff from '@material-ui/icons/VisibilityOff';
import FormControll from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import { FormHelperText, OutlinedInput } from '@material-ui/core';
import { TextFieldContainer, useStyles } from './style';

type Props = {
  textFieldType: TextFieldType;
  password?: string;
  setText?: Dispatch<SetStateAction<string | undefined>>;
};

export type TextFieldType =
  | 'email'
  | 'password'
  | 'confirmPassword'
  | 'bookName'
  | 'bookPrice'
  | 'purchaseDate';

interface TextFieldState {
  textValue: string;
  showIcon: boolean;
  showPassword: boolean;
}

const returnOutlinedtextFieldType = (textFieldType: TextFieldType) => {
  switch (textFieldType) {
    case 'email':
      return 'email';
    case 'purchaseDate':
      return 'date';
    case 'bookPrice':
      return 'number';
    default:
      return 'text';
  }
};

const returnInputLabel = (textFieldType: TextFieldType) => {
  switch (textFieldType) {
    case 'email':
      return 'メールアドレス';
    case 'password':
      return 'パスワード';
    case 'confirmPassword':
      return 'もう一度確認';
    case 'bookName':
      return '書籍名';
    case 'bookPrice':
      return '値段';
    case 'purchaseDate':
      return '';
  }
};

const returnTextFieldMessage = (textFieldType: TextFieldType) => {
  switch (textFieldType) {
    case 'email':
      return 'メールアドレスが正しくありません';
    case 'password':
      return '文字数がたりません';
    case 'confirmPassword':
      return 'パスワードが一致していません';
    default:
      return '';
  }
}

const returnTextFieldLabelWidth = (textFieldType: TextFieldType) => {
  switch (textFieldType) {
    case 'email':
      return 110;
    case 'password':
      return 80;
    case 'confirmPassword':
      return 100;
    case 'bookName':
      return 50;
    case 'bookPrice':
      return 40;
    case 'purchaseDate':
      return 0;
  }
};

const isPassword = (textFieldType: TextFieldType) => {
  return textFieldType == 'password' || textFieldType == 'confirmPassword';
};

export function TextFieldComponent(props: Props) {
  const classes = useStyles();
  const { textFieldType, password, setText } = props;
  const [values, setValues] = useState<TextFieldState>({
    textValue: "",
    showIcon: false,
    showPassword: isPassword(textFieldType),
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleChange = (prop: keyof TextFieldState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(values.textValue)
    console.log(event.target.value);
    if(setText) {
      setText(event.target.value);
    }
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
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

  const isValid = () => {
    if (
      textFieldType == 'password' ||
      textFieldType == 'email'
    ) {
      return !inputRef.current?.validity.valid;
    }

    if (
      textFieldType == 'confirmPassword' &&
      password !== values.textValue
    ) {
      return true
    }

    return false;
  };

  const textFieldClass = classNames(classes.marginTextField, classes.textField);
  const helperTextClass = classNames(classes.marginHelperText, classes.helperText);

  return (
    <TextFieldContainer>
      <FormControll className={textFieldClass} variant="outlined">
        <InputLabel htmlFor="outlined">
          {returnInputLabel(textFieldType)}
        </InputLabel>
        <OutlinedInput
          error={isValid()}
          id="outlined"
          type={
            values.showPassword
              ? 'password'
              : returnOutlinedtextFieldType(textFieldType)
          }
          onChange={handleChange('textValue')}
          endAdornment={
            textFieldType == 'password' || textFieldType == 'confirmPassword'
              ? renderPasswordIcon()
              : undefined
          }
          labelWidth={returnTextFieldLabelWidth(textFieldType)}
          inputRef={inputRef}
          inputProps={textFieldType == 'password' ||
                      textFieldType == 'email' ? { minlength: 6 } : undefined }
        />
      </FormControll>
      <FormHelperText className={helperTextClass}>
        {isValid() ? returnTextFieldMessage(textFieldType) : undefined}
      </FormHelperText>
    </TextFieldContainer>
  );
}
