import { createStyles, makeStyles } from "@material-ui/core";
import { PRIMARY_COLOR, WHITE_COLOR } from "../../../utils/color";
import { generatePaletteColor } from "../../../utils/generateColor";

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

export const theme = generatePaletteColor(PRIMARY_COLOR, WHITE_COLOR);
