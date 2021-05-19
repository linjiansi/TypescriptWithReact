import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { theme, useStyles } from './style';

type Props = {
  useCase: UseCase;
  children: React.ReactNode;
};

export type UseCase = 'auth' | 'main';

export function ButtonComponent(props: Props) {
  const { useCase, children } = props;
  const classes = useStyles();

  return (
    <div className={useCase == 'auth' ? classes.auth : classes.main}>
      <ThemeProvider theme={theme}>
        <Button
          className={classes.button}
          variant="contained"
          color={useCase == 'auth' ? 'primary' : 'secondary'}
          fullWidth={useCase == 'auth'}
        >
          {children}
        </Button>
      </ThemeProvider>
    </div>
  );
}
