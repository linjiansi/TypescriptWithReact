import React, { useState, useRef, Dispatch, SetStateAction } from 'react';
import FormControll from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import classNames from 'classnames';
import { FormHelperText, OutlinedInput } from '@material-ui/core';
import { TextFieldContainer, useStyles } from './style';
import { IconButtonComponent } from '../../atoms/IconButton';

type Props = {
  textFieldType: TextFieldType;
  password?: string;
  setText?: Dispatch<SetStateAction<string | undefined>>;
  setError?: Dispatch<SetStateAction<boolean>>;
};

const TextFieldType = {
  email: 'EMAIL',
  password: 'PASSWORD',
  confirmPassword: 'CONFIRM_PASSWORD',
  bookName: 'BOOK_NAME',
  bookPrice: 'BOOK_PRICE',
  purchaseDate: 'PURCHASE_DATE',
} as const;

export type TextFieldType = typeof TextFieldType[keyof typeof TextFieldType];

const returnOutlinedtextFieldType = (textFieldType: TextFieldType) => {
  switch (textFieldType) {
    case TextFieldType.email:
      return 'email';
    case TextFieldType.purchaseDate:
      return 'date';
    case TextFieldType.bookPrice:
      return 'number';
    default:
      return 'text';
  }
};

const returnInputLabel = (textFieldType: TextFieldType) => {
  switch (textFieldType) {
    case TextFieldType.email:
      return 'メールアドレス';
    case TextFieldType.password:
      return 'パスワード';
    case TextFieldType.confirmPassword:
      return 'もう一度確認';
    case TextFieldType.bookName:
      return '書籍名';
    case TextFieldType.bookPrice:
      return '値段';
    case TextFieldType.purchaseDate:
      return '';
  }
};

const returnTextFieldMessage = (textFieldType: TextFieldType) => {
  switch (textFieldType) {
    case TextFieldType.email:
      return 'メールアドレスが正しくありません';
    case TextFieldType.password:
      return '文字数がたりません';
    case TextFieldType.confirmPassword:
      return 'パスワードが一致していません';
    default:
      return '';
  }
}

const returnTextFieldLabelWidth = (textFieldType: TextFieldType) => {
  switch (textFieldType) {
    case TextFieldType.email:
      return 110;
    case TextFieldType.password:
      return 80;
    case TextFieldType.confirmPassword:
      return 100;
    case TextFieldType.bookName:
      return 50;
    case TextFieldType.bookPrice:
      return 40;
    case TextFieldType.purchaseDate:
      return 0;
  }
};

const isPassword = (textFieldType: TextFieldType) => {
  return textFieldType == TextFieldType.password || textFieldType == TextFieldType.confirmPassword;
};

export function TextFieldComponent(props: Props) {
  const classes = useStyles();
  const { textFieldType, password, setText, setError } = props;
  const [textValue, setTextValue] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(isPassword(textFieldType));

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (setError) {
      console.log(validator(event.target.value));
      textFieldType == TextFieldType.confirmPassword ?
        setError(isConfirmTextFieldValid(event)) :
        setError(validator(event.target.value));
    }
    if(setText) {
      setText(event.target.value);
    }
    setTextValue(event.target.value);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const validator = (target: string) => {
    if (
      textFieldType == TextFieldType.password ||
      textFieldType == TextFieldType.email
    ) {
      return !inputRef.current?.validity.valid || (target == '');
    }
    return (
      textFieldType == TextFieldType.confirmPassword && password != target
    ) ? true : false
  }

  const isConfirmTextFieldValid = (event: React.ChangeEvent<HTMLInputElement>) => {
    return (
      textFieldType == TextFieldType.confirmPassword &&
      password != event.target.value) ?
      true :
      false;
  }

  const textFieldClass = classNames(classes.marginTextField, classes.textField);
  const helperTextClass = classNames(classes.marginHelperText, classes.helperText);

  return (
    <TextFieldContainer>
      <FormControll className={textFieldClass} variant="outlined">
        <InputLabel htmlFor="outlined">
          {returnInputLabel(textFieldType)}
        </InputLabel>
        <OutlinedInput
          error={validator(textValue)}
          id="outlined"
          type={
            showPassword
              ? 'password'
              : returnOutlinedtextFieldType(textFieldType)
          }
          onChange={handleChange}
          endAdornment={
            isPassword(textFieldType) && <IconButtonComponent setShowPassword={setShowPassword}></IconButtonComponent>
          }
          labelWidth={returnTextFieldLabelWidth(textFieldType)}
          inputRef={inputRef}
          inputProps={textFieldType == TextFieldType.password ||
                      textFieldType == TextFieldType.email ? { minlength: 6 } : undefined }
        />
      </FormControll>
      <FormHelperText className={helperTextClass}>
        {validator(textValue) && returnTextFieldMessage(textFieldType)}
      </FormHelperText>
    </TextFieldContainer>
  );
}
