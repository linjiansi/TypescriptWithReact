import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { ButtonComponent } from '../../atoms/Button/index';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, MemoryRouter } from 'react-router-dom';
import { theme, useStyles } from './style';

type Props = {
  headerType: HeaderType;
};

export type HeaderType = 'main' | 'bookList' | 'editBook' | 'addBook';

const returnHeaderTitle = (headerType: HeaderType) => {
  switch (headerType) {
    case 'main':
      return 'BookManager';
    case 'bookList':
      return '書籍一覧';
    case 'addBook':
      return '書籍追加';
    case 'editBook':
      return '書籍編集';
  }
};

const returnButtonTitle = (headerType: HeaderType) => {
  switch (headerType) {
    case 'main':
      return 'LOGOUT';
    case 'bookList':
      return 'CREATE';
    case 'addBook':
      return 'CREATE';
    case 'editBook':
      return 'UPDATE';
  }
};

const returnRouterPath = (headerType: HeaderType) => {
  switch (headerType) {
    case 'main':
      return '/login';
    case 'bookList':
      return '/add';
    case 'addBook':
      return '/';
    case 'editBook':
      return '/';
  }
};

export function HeaderComponent(props: Props) {
  const { headerType } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          color={headerType == 'main' ? 'primary' : 'secondary'}
          className={classes.header}
        >
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {returnHeaderTitle(headerType)}
            </Typography>
            <MemoryRouter>
              <Link to={returnRouterPath(headerType)}>
                <ButtonComponent useCase={'main'}>{returnButtonTitle(headerType)}</ButtonComponent>
              </Link>
            </MemoryRouter>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
