import { createStyles, makeStyles, Theme } from "@material-ui/core";
import styled from 'styled-components';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: 300,
    },
  })
);

export const TextFieldContainer = styled.div`
  align-items: center;
`;
