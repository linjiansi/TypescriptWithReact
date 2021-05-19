import { createMuiTheme, createStyles, makeStyles } from "@material-ui/core";
import { PRIMARY_COLOR, WHITE_COLOR } from "../../../utils/color";

export const useStyles = makeStyles(() =>
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

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: WHITE_COLOR,
    },
  },
});
