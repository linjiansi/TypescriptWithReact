import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

type Props = {
    buttonColor: ButtonColor;
    children: React.ReactNode;
};

export type ButtonColor = 'primary' | 'secondary'

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
    const { buttonColor, children } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained" color={buttonColor}>{children}</Button>
        </div>
    )
}
