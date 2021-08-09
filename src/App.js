import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './components/Header';
import MainFeaturedPost from './components/MainFeaturedPost';
import Posting from './components/Post';
import TopMain from './components/TopMain';
import Footer from './components/Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import News from './news-paper'
import Clouds from './clouds'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  name:{
    marginTop: theme.spacing(5),
    textAlign: 'center',
  },
  as:
  {
    position: 'relative',
    margin: '#fff',
  },
  mainGrid: {
    flex : 1,
  },
  main:{
    backgroundColor: '#000',
  },
  containers:{
    backgroundColor: '#fff',
    marginTop: '40px',
  },
}));

const sections = [
  { title: 'Technologia', url: '#' },
  { title: 'Diseño', url: '#' },
  { title: 'Cultura', url: '#' },
  { title: 'Negocios', url: '#' },
  { title: 'Politica', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Ciencia', url: '#' },
  { title: 'Salud', url: '#' },
  { title: 'Estilo', url: '#' },
  { title: 'Viajes', url: '#' },
];


export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment className={classes.main}>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.containers}>
        <Header title="Twitter's News Bot" sections={sections} />
      <News></News>
      <div className={classes.name}>
      <Typography variant="h2" component="h2" gutterBottom className={classes.as}>Nubes de Palabras</Typography>
      <Divider />
      </div>
      <Clouds></Clouds>
      </Container>
      <Footer title="Universidad Nacional de San Antonio Abad" description="Escuela Profesional de Ing. Informática y de Sistemas" />
    </React.Fragment>
  );
}