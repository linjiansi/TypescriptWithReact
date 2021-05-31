import { createMuiTheme } from '@material-ui/core';
import { PRIMARY_COLOR, SECONDARY_COLOR, WHITE_COLOR } from './color';

type ColorType = typeof PRIMARY_COLOR |
                 typeof SECONDARY_COLOR |
                 typeof WHITE_COLOR

export const generatePaletteColor = (primary: ColorType, secondary: ColorType) => {
  return createMuiTheme({
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
    },
  });
};
