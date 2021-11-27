import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  Button,
  Container,
  Fab,
  makeStyles,
  Modal,
  Snackbar,
  TextField,
  Tooltip,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MuiAlert from '@material-ui/lab/Alert';

import { addPostStartAction } from '../redux/post/postActions';
import { selectIsLoading, selectIsSuccess } from '../redux/post/postSelectors';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      height: '100vh',
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// AddPost component that allows users to create posts
const AddPost = ({ addPostStartDispatch, isAddingPostSuccessful }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [openAlert, setOpenAlert] = React.useState(false);

  const [postDataToAdd, setPostDataToAdd] = React.useState({
    title: '',
    description: '',
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  const handleOnChange = (event) => {
    const { value, name } = event.target;

    setPostDataToAdd({ ...postDataToAdd, [name]: value });
  };

  const handleSubmitPost = async (event) => {
    event.preventDefault();
    console.log('postDataToAdd: ', postDataToAdd);
    addPostStartDispatch(postDataToAdd);
  };

  React.useEffect(() => {
    if (isAddingPostSuccessful) {
      setOpenAlert(true); // When openAlert is true,
    }
  }, [isAddingPostSuccessful]);

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: '100%' }}
                name="title"
                onChange={handleOnChange}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={10}
                defaultValue="Write a blog..."
                variant="outlined"
                label="Description"
                size="small"
                style={{ width: '100%' }}
                name="description"
                onChange={handleOnChange}
              />
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={handleSubmitPost}
                // onClick={() => setOpenAlert(true)}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert} // If true, the component is shown
        autoHideDuration={4000}
        onClose={handleClose} // fired when the component requests to be closed.
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={handleClose} severity="success">
          Post has been successfully added!
        </Alert>
      </Snackbar>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  isIndividualPostFetching: selectIsLoading,
  isAddingPostSuccessful: selectIsSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  addPostStartDispatch: (data) => dispatch(addPostStartAction(data)),
});

AddPost.propTypes = {
  addPostStartDispatch: PropTypes.func.isRequired,
  isAddingPostSuccessful: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
