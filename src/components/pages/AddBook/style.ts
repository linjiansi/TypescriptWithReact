import { createStyles, makeStyles, Theme } from "@material-ui/core";
import styled from 'styled-components';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: theme.spacing(8),
    },
  })
);

export const PaperContainer = styled.div`
  width: 800px;
  margin: 0 auto;
`;
