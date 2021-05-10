import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

type Props = {
    bookName: string;
    bookPrice?: number;
    purchaseDate?: string;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%',
        }
    }),
);

export default function BookCard(props: Props) {
    const { bookName, bookPrice, purchaseDate } = props;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image='../../../../public/logo192.png'
                title='book'
            />
            <CardContent>
                <Typography variant='body2' color='textPrimary'>
                    書籍名: {bookName}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                    金額: {bookPrice}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                    購入日: {purchaseDate}
                </Typography>
            </CardContent>
        </Card>
    );
}
