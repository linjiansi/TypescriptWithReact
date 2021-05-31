import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: theme.spacing(8),
    },
  })
);
