import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Posting from './components/Post';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    flex : 1,
  },
  main:{
    backgroundColor: '#000',
  },
  containers:{
    marginTop: '20px',
  },
}));


const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      '',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
 
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      '',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];


export default function Clouds() {
  const classes = useStyles();
  return(
  <Container maxWidth="xl" className={classes.containers}>
  
  <Grid container direction = 'row' spacing={3}>
  <Grid item xs ={12} sm = {6} className={classes.azul}>
   {featuredPosts.map((post) => (
      <Posting posti={post} tam={600}/>
    ))} 
  </Grid>
  <Grid item xs ={12} sm = {6} className={classes.amarillo}>
   {featuredPosts.map((post) => (
      <Posting posti={post} tam={600}/>
    ))}
  </Grid>
  </Grid>
  </Container>);
}