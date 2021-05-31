import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { theme, useStyles } from './style';
import classNames from 'classnames';

type Props = {
  useCase: UseCase;
  buttonType?: "submit";
  form?: string;
  disabled: boolean;
  children: React.ReactNode;
};

// export type UseCase = 'auth' | 'main';
const UseCase = {
  auth: 'AUTH',
  main: 'MAIN',
} as const;

export type UseCase = typeof UseCase[keyof typeof UseCase];

export function ButtonComponent(props: Props) {
  const { useCase, buttonType, form, disabled, children, } = props;
  const classes = useStyles();
  const buttonClass = classNames(classes.button);

  return (
    <div className={useCase == UseCase.auth ? classes.auth : classes.main}>
      <ThemeProvider theme={theme}>
        <Button
          className={buttonClass}
          variant="contained"
          color={useCase == UseCase.auth ? 'primary' : 'secondary'}
          fullWidth={useCase == UseCase.auth}
          type={buttonType}
          form={form}
          disabled={disabled}
        >
          {children}
        </Button>
      </ThemeProvider>
    </div>
  );
}
