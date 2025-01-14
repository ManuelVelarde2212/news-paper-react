import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  TopMainPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(3),
    backgroundImage: 'url()',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '98.5%',
    borderRadius: '2%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
    borderRadius: '2%',
    "&:hover":{
      color: 'white',
      backgroundColor:'transparent',
    },
  },
  TopPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
    paddingRight: 0,
    fontFamily: 'fontFamily',
    },
    
  },
  Tittle:{
    fontSize: "70px",
    fontWeight: 500,
    letterSpacing: "-0.5px",
    lineHeight: 1,
    backgroundColor:"rgba(0,0,0,.7)",
  }
}));

export default function TopMain(props) {
  const classes = useStyles();
  const { post } = props;
  return (
      <a href={post.enlace}>
     <Paper className={classes.TopMainPost} style={{ backgroundImage: `url(${post.image})` }}>
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay}/>
      <Grid container>
        <Grid item md={5}>
          <div className={classes.TopPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom className={classes.Tittle}>
              {post.title}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
    </a>  
  );
}

TopMain.propTypes = {
  post: TopMain.object,
};