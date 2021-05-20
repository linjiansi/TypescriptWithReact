import React from 'react';
import Header from '../../molecules/Header/index';
import BookList from '../../organisms/BookList/index';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            margin: theme.spacing(8),
        },
    }),
);


export default function Home() {
    const classes = useStyles();

    return (
        <>
            <Header headerType={'main'}></Header>
            <Paper elevation={8} className={classes.paper}>
                <BookList></BookList>
            </Paper>
        </>
    );
}