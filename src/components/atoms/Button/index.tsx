import React from 'react';
import { makeStyles, createStyles, createMuiTheme, ThemeProvider, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { primaryColor, secondaryColor } from '../../../utils/color';
import styled from 'styled-components';

type Props = {
    useCase: UseCase;
    children: React.ReactNode;
};

export type UseCase = 'auth' | 'main';

const useStyles = makeStyles(() =>
    createStyles({
        auth: {
            width: '30ch',
            backgroundColor: 'blue',
        },
        main: {
            width: 100,
        },
        button: {
            margin: theme.spacing(1),
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

// const Container = styled.div`
//     align-items: center;
//     background-color: blue;
// `;

export default function ContainedButton(props: Props) {
    const { useCase, children } = props;
    const classes = useStyles();

    return (
        <div className={useCase == 'auth' ? classes.auth : classes.main}>
            <ThemeProvider theme={theme}>
                <Button
                    className={classes.button}
                    variant="contained"
                    color={useCase == 'auth' ? 'primary' : 'secondary'}
                    fullWidth={useCase == 'auth'}
                >{children}</Button>
            </ThemeProvider>
        </div>
    )
}
