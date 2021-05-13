import React from 'react';
import Header from '../../molecules/Header/index';
import BookScreen from '../../organisms/BookScreen/index';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            margin: theme.spacing(8),
        },
    }),
);


export default function EditBook() {
    const classes = useStyles();

    return (
        <>
            <Header headerType={'main'}></Header>
            <Paper elevation={8} className={classes.paper}>
                <BookScreen bookMode='edit'></BookScreen>
            </Paper>
        </>
    );
}