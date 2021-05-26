import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { theme, useStyles } from './style';
import classNames from 'classnames';

type Props = {
  useCase: UseCase;
  buttonType?: "submit";
  form?: string;
  children: React.ReactNode;
};

export type UseCase = 'auth' | 'main';

export function ButtonComponent(props: Props) {
  const { useCase, buttonType, form, children } = props;
  const classes = useStyles();
  const buttonClass = classNames(classes.button);

  return (
    <div className={useCase == 'auth' ? classes.auth : classes.main}>
      <ThemeProvider theme={theme}>
        <Button
          className={buttonClass}
          variant="contained"
          color={useCase == 'auth' ? 'primary' : 'secondary'}
          fullWidth={useCase == 'auth'}
          type={buttonType}
          form={form}
        >
          {children}
        </Button>
      </ThemeProvider>
    </div>
  );
}
