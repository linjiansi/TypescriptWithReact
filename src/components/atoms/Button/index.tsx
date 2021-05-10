import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

type Props = {
    children: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),  
            },
        },
    }),
);

export default function ContainedButton(props: Props) {
    const children = props.children;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained">{children}</Button>
        </div>
    )
}
