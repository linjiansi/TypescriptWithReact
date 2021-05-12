import React from 'react';
import { makeStyles, createStyles, createMuiTheme, ThemeProvider, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { primaryColor, secondaryColor } from '../../../utils/color';

type Props = {
    useCase: UseCase;
    children: React.ReactNode;
};

export type UseCase = 'auth' | 'main';

const useStyles = makeStyles(() =>
    createStyles({
        auth: {
            width: 280,
        },
        main: {
            width: 100,
        },
    }),
);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor(),
        },
        secondary: {
            main: secondaryColor(),
        },
    },
});

export default function ContainedButton(props: Props) {
    const { useCase, children } = props;
    const classes = useStyles();

    return (
        <div className={useCase == 'auth' ? classes.auth : classes.main}>
            <ThemeProvider theme={theme}>
            <Button
                variant="contained"
                color={useCase == 'auth' ? 'primary' : 'secondary'}
                fullWidth={useCase == 'auth'}
            >{children}</Button>
            </ThemeProvider>
        </div>
    )
}
