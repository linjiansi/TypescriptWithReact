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
  buttonForm?: ButtonForm;
};

const HeaderType = {
  main: 'MAIN',
  bookList: 'BOOK_LIST',
  editBook: 'EDIT_BOOK',
  addBook: 'ADD_BOOK',
} as const;

const ButtonForm = {
  edit: 'EDIT',
  add: 'ADD',
} as const;

export type HeaderType = typeof HeaderType[keyof typeof HeaderType];
export type ButtonForm = typeof ButtonForm[keyof typeof ButtonForm];

const returnHeaderTitle = (headerType: HeaderType) => {
  switch (headerType) {
    case HeaderType.main:
      return 'BookManager';
    case HeaderType.bookList:
      return '書籍一覧';
    case HeaderType.addBook:
      return '書籍追加';
    case HeaderType.editBook:
      return '書籍編集';
  }
};

const returnButtonTitle = (headerType: HeaderType) => {
  switch (headerType) {
    case HeaderType.main:
      return 'LOGOUT';
    case HeaderType.bookList:
      return 'CREATE';
    case HeaderType.addBook:
      return 'CREATE';
    case HeaderType.editBook:
      return 'UPDATE';
  }
};

const returnRouterPath = (headerType: HeaderType) => {
  switch (headerType) {
    case HeaderType.main:
      return '/login';
    case HeaderType.bookList:
      return '/add';
    case HeaderType.addBook:
      return '/';
    case HeaderType.editBook:
      return '/';
  }
};

export function HeaderComponent(props: Props) {
  const { headerType, buttonForm } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          color={headerType == HeaderType.main ? 'primary' : 'secondary'}
          className={classes.header}
        >
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {returnHeaderTitle(headerType)}
            </Typography>
            <MemoryRouter>
              <Link to={returnRouterPath(headerType)}>
                <ButtonComponent useCase='MAIN'
                                 form={buttonForm}
                                 disabled={false}>{returnButtonTitle(headerType)}</ButtonComponent>
              </Link>
            </MemoryRouter>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
