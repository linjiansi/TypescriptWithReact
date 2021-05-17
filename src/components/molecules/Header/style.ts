import { createMuiTheme, createStyles, makeStyles } from "@material-ui/core";
import { primaryColor, whiteColor } from "../../../utils/color";

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
      main: primaryColor(),
    },
    secondary: {
      main: whiteColor(),
    },
  },
});
