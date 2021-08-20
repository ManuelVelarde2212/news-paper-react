import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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

const useStyles = makeStyles((theme) => ({
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
  naranja:{
    backgroundColor: '#9fd955',
    position: 'flex',

  },
  rojo:{
    backgroundColor: '#e85864',
    position: 'flex',

  },
  azul:{
    backgroundColor: '#5687e3',
    position: 'flex',
  },
  amarillo:{
    backgroundColor: '#e36fd0',
    position: 'flex',
  }
}));



const mainFeaturedPost = {
  title: 'Lideresas indígenas piden a Gobierno respetar derechos de las mujeres y LGBTI',
  description:
    '',
  image: 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2019/05/08/000584703W.jpg',
  imgText: 'main image description',
  linkText: 'image',
};

const Politica = [
  {
    title: 'Presidente Pedro Castillo: “Este es un Congreso inteligente, este es un Congreso nuevo, este es un Congreso puesto por el país y yo no creo que este Congreso le deba algo a alguien”.',
    date: 'Nov 12',
    description:
      '',
    image: 'https://s.france24.com/media/display/fef22c28-9bbd-11eb-9104-005056a9b1a7/pedro%20castillo.png',
    imageText: 'Image Text',
  },
  {
    title: "Titular del Ministerio del Interio, nombra a Olga Chagua y Gabriela Paliza, como viceministras de la cartera.",
    date: 'Nov 11',
    description:
      '',
    image: 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2021/08/12/000798427W.jpg',
    imageText: 'Image Text',
  },
  {
    title: "Parlamentarios de AvanzaPais han presentado una moción que busca considerar designación de Guido Bellido como primer ministro como 'acto inmoral'",
    date: 'Nov 12',
    description:
      '',
    image: 'https://www.radioyaravi.org.pe/storage/news/20210817-104919_Congreso-Consejo-Directivo-ver---moci--n-de-interpelaci--n-a-ministro-H--ctor-B--jar-este-martes.png',
    imageText: 'Image Text',
  },
];

const Deporte = [
  {
    title: "El entrenador argentino dirigió ante Alianza Lima su último partido al mando de Universitario.    ",
    date: 'Nov 12',
    description:
      '',
    image: 'https://e.rpp-noticias.io/normal/2021/08/18/271427_1133547.jpg',
    imageText: 'Image Text',
  },
  {
    title: "Con Ruidíaz desde los 62 minutos, Seattle Sounders venció 1-0 a FC Dallas por la fecha 20 de la MLS(Conferencia Oeste).",
    date: 'Nov 11',
    description:
      '',
    image: 'https://files.diarioextra.com/files/Dnews/images/detail/457520_raul.jpg',
    imageText: 'Image Text',
  },
  {
    title: '¡SE ROMPIÓ! ClubALoficial derrotó 2-1 a Universitario en una nueva edición del  Por la fecha 7 de la Fase 2 de la  los íntimos se alzaron con el triunfo     ',
    date: 'Nov 12',
    description:
      '',
    image: 'https://e.rpp-noticias.io/normal/2020/03/08/210721_910700.jpg',
    imageText: 'Image Text',
  },
];

const Farandula = [
  {
    title: " Sheyla Rojas revela cómo es su relación con Joi Sánchez, novia de Antonio Pavón  ",
    date: 'Nov 12',
    description:
      '',
    image: 'https://e.an.amtv.pe/espectaculos-sheyla-rojas-respondio-asi-ataques-antonio-pavon-n199662-1200x630-210477.jpg',
    imageText: 'Image Text',
  },
  {
    title: "Ivana Yturbe y Beto Da Silva cumplieron seis meses de matrimonio",
    date: 'Nov 11',
    description:
      '',
    image: 'https://prod.media.wapa.pe/1200x630/wapa/imagen/2021/01/20/noticia-1611172753-ivana-yturbe-se-caso-con-beto-de-silva-video.jpg',
    imageText: 'Image Text',
  },
];

const featuredPosts = [
  {
    title: 'Estas son las claves para entender qué está pasando en Afganistán y cómo se llegó a la situación actual',
    date: 'Nov 12',
    description:
      '',
    image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/3A16/production/_119907841_301f5ec7-23e5-4ca1-8d11-27b602016281.jpg',
    imageText: 'Image Text',
  },
  {
    title: 'Grace toca tierra al sur de Tulum, en México, como un huracán categoría 1 con vientos máximos sostenidos de 80 millas por hora.     ',
    date: 'Nov 11',
    description:
      '',
    image: 'https://cdn-3.expansion.mx/dims4/default/521d6bc/2147483647/strip/true/crop/1024x744+0+0/resize/800x581!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fc4%2F9a%2F5fd9e9de4076a480dd8a882a7350%2F000-9lc274.jpg',
    imageText: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function News() {
  const classes = useStyles();

  return (
        <Container maxWidth="xl">
          <Grid container direction = 'row' spacing={3}>
          <Grid item className={classes.naranja} xs ={3}>
           {Politica.map((post) => (
              <Posting posti={post}/>
            ))}
          </Grid>
          <Grid item xs = {6}>
            <TopMain post={mainFeaturedPost}></TopMain>
          </Grid>
          <Grid item xs ={3} className={classes.rojo}>
           {Deporte.map((post) => (
              <Posting posti={post}/>
            ))}
          </Grid>
          </Grid>
          <Grid container direction = 'row' spacing={3}>
          <Grid item xs ={12} sm = {6} className={classes.azul}>
           {featuredPosts.map((post) => (
              <Posting posti={post}/>
            ))} 
          </Grid>
          <Grid item xs ={12} sm = {6} className={classes.amarillo}>
           {Farandula.map((post) => (
              <Posting posti={post}/>
            ))}
          </Grid>
          </Grid>         
        </Container>
  );
}