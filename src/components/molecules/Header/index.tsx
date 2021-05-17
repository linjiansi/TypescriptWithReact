import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Button from '../../atoms/Button/index';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { primaryColor, whiteColor } from '../../../utils/color';
import { Link } from 'react-router-dom';

type Props = {
  headerType: HeaderType;
};

export type HeaderType = 'main' | 'bookList' | 'editBook' | 'addBook';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    header: {
      boxShadow: 'none',
    },
  })
);

const returnHeaderTitle = (headerType: HeaderType) => {
  switch (headerType) {
    case 'main':
      return 'BookManager';
      break;
    case 'bookList':
      return '書籍一覧';
      break;
    case 'addBook':
      return '書籍追加';
      break;
    case 'editBook':
      return '書籍編集';
      break;
  }
};

const returnButtonTitle = (headerType: HeaderType) => {
  switch (headerType) {
    case 'main':
      return 'LOGOUT';
      break;
    case 'bookList':
      return 'CREATE';
      break;
    case 'addBook':
      return 'CREATE';
      break;
    case 'editBook':
      return 'UPDATE';
      break;
  }
};

const returnRouterPath = (headerType: HeaderType) => {
  switch (headerType) {
    case 'main':
      return '/login';
      break;
    case 'bookList':
      return '/add';
      break;
    case 'addBook':
      return '/';
      break;
    case 'editBook':
      return '/';
      break;
  }
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor(),
    },
    secondary: {
      main: whiteColor(),
    },
  },
});

export default function Header(props: Props) {
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
            <Link to={returnRouterPath(headerType)}>
              <Button useCase={'main'}>{returnButtonTitle(headerType)}</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
