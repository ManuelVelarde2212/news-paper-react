import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const themes = createTheme({
  typography: {
    fontFamily: 'Georama', 
  },
});

const useStyles = makeStyles((theme) => ({
  FeaturedPost: {
    position: 'flex',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '350px',
    borderRadius: '2%',
  },

  overlay: {
    height : '350px',
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  FeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      paddingRight: 0,
      },
  },
}));

export default function Posting(props) {
  const classes = useStyles();
  const { posti, tam } = props;

  return (
    
    <Paper className={classes.FeaturedPost} style={{ backgroundImage: `url(${posti.image})`,
    height: `${tam}px`}}>
      {<img style={{ display: 'none' }} src={posti.image} alt={posti.imageText} />}
      
      <Grid container >
      <div className={classes.overlay} >
        <Grid item md={9}>
          <div className={classes.FeaturedPostContent}>
            <ThemeProvider theme={themes}>
              <Typography component="h2" variant="h6" color="inherit" gutterBottom className={classes.text}>
                {posti.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph className={classes.text}>
                {posti.description}
              </Typography>
            </ThemeProvider>
          </div>
        </Grid>
        </div>
      </Grid>
    </Paper>

  );
}

Posting.propTypes = {
  posti: PropTypes.object,
  tam: PropTypes.number,
};