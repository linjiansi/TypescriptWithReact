import { createStyles, makeStyles } from "@material-ui/core";
import styled from 'styled-components';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
  })
);

export const BookPriceAndDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
