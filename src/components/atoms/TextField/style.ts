import { createStyles, makeStyles, Theme } from "@material-ui/core";
import styled from 'styled-components';
import { RED_COLOR } from "../../../utils/color";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    marginTextField: {
      margin: theme.spacing(1),
    },
    marginHelperText: {
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(1),
    },
    textField: {
      width: 300,
    },
    helperText: {
      color: RED_COLOR,
    },
  })
);

export const TextFieldContainer = styled.div`
  align-items: center;
`;
