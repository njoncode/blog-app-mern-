import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import history from '../utils/history';
import { fetchIndividualPostStartAction } from '../redux/post/postActions';
import { trimmedContent } from '../utils/helperFunctions';

// BlogPostCard component contains content and actions about a single post.
const BlogPostCard = ({ post }) => {
  const match = useRouteMatch();

  console.log('match is: ', match);

  const { _id: id, title, description } = post;

  // On clicking the Read More button, handleReadMoreClick function will be fired & the user will be redirected to the route that will show that specofic post
  const handleReadMoreClick = (postId) => {
    console.log('Route is ', `${match.path}posts/${postId}`);
    history.push(`${match.path}posts/${postId}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgXWUMr_Vcw6KhaHLTy0SNSljgWrMIi5rFQ&usqp=CAU"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {trimmedContent(description)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleReadMoreClick(id)}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchIndividualPostStartDispatch: (data) =>
    dispatch(fetchIndividualPostStartAction(data)),
});

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(BlogPostCard);
