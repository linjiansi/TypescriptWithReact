import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../utils/color";
import { generatePaletteColor } from "../../../utils/generateColor";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    auth: {
      width: 300,
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

export const theme = generatePaletteColor(PRIMARY_COLOR, SECONDARY_COLOR);
