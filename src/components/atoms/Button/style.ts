import { createMuiTheme, createStyles, makeStyles } from "@material-ui/core";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../utils/color";

export const useStyles = makeStyles(() =>
  createStyles({
    auth: {
      width: '30ch',
    },
    main: {
      width: 100,
    },
    button: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
  },
});
