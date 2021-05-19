import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { BookPriceAndDateContainer, useStyles } from './style';

type Props = {
  bookName: string;
  bookPrice?: number;
  purchaseDate?: string;
};

export default function BookCard(props: Props) {
  const { bookName, bookPrice, purchaseDate } = props;
  const classes = useStyles();

  return (
    <Link to={'/edit'}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random"
          title="book"
        />
        <CardContent>
          <Typography variant="body2" color="textPrimary">
            書籍名: {bookName}
          </Typography>
          <BookPriceAndDateContainer>
            <Typography variant="body2" color="textSecondary">
              金額: {bookPrice ?? 0}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              購入日: {purchaseDate ?? ''}
            </Typography>
          </BookPriceAndDateContainer>
        </CardContent>
      </Card>
    </Link>
  );
}
