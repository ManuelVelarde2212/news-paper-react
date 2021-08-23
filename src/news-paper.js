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
  title: 'Allison Pastor tiene cruce de palabras con Gisela Valcárcel y se retira de “Reinas del Show',
  description:
    '',
  image: 'https://lanoticia.com.pe/wp-content/uploads/2021/07/13.1-Allison-Pastor-e1626853327448.jpg',
  imgText: 'main image description',
  linkText: 'image',
};

const Politica = [
  {
    title: 'Según la ContraloriaPeru, la irregular contratación de personal de confianza en la gestión de JorgeMunozPe habría generado un perjuicio económico de más de S/ 1.8 millones a la MuniLima.',
    date: 'Nov 12',
    description:
      '',
    image: 'https://www.tvperu.gob.pe/sites/default/files/000553665w.jpg',
    imageText: 'Image Text',
  },
  {
    title: " Juan Carrasco: “Nunca interferí en una investigación como fiscal y no lo haré como ministro”  El primer ministro del Interior de Pedro Castillo habló sobre los temas polémicos que enfrenta su despacho.",
    date: 'Nov 11',
    description:
      '',
    image: 'https://as01.epimg.net/peru/imagenes/2021/08/03/actualidad/1628009322_593755_1628009499_noticia_normal_recorte1.jpg',
    imageText: 'Image Text',
  },
  {
    title: "Ministro del Ambiente, Rubén Ramírez, visita feria de productos ecológicos y sostenibles en San Borja.",
    date: 'Nov 12',
    description:
      '',
    image: 'https://industriaspesqueras.com/imagenes/genericas/standard_232130430_10159904317109973_5816754285378887220_n.jpg',
    imageText: 'Image Text',
  },
];

const Deporte = [
  {
    title: "¡DUELO DE ALTURA! Club_Cienciano se mide ante BinacionalFC por la octava fecha de la Fase 2 de la  Desde el estadio Iván Elías Moreno, los planteles irán por el triunfo.",
    date: 'Nov 12',
    description:
      '',
    image: 'https://imgmedia.libero.pe/748x396/libero/original/2021/08/22/61228c8c28e19d6e6321adaa.jpg',
    imageText: 'Image Text',
  },
  {
    title: "Con Yoshimar Yotún todo el partido, Cruz Azul empató 0-0 ante San Luis por la fecha 6 de la Liga MX. El equipo dirigido por Reynoso se ubica en la sexta casilla del torneo.  Cruz Azul ha sumado su quinto partido invicto en la Liga MX.",
    date: 'Nov 11',
    description:
      '',
    image: 'https://cdn.futbolperuano.com/sdi/2021/04/13/cruz-azul-vs-arcahaie-en-vivo-con-yoshimar-yotun-por-octavos-de-final-de-concachampions-909841.jpg',
    imageText: 'Image Text',
  },
  {
    title: '15 minutos le bastaron a Romelu Lukaku  para anotar su primer gol con el Chelsea . ¡La ‘bestia’ está de vuelta!',
    date: 'Nov 12',
    description:
      '',
    image: 'https://phantom-marca.unidadeditorial.es/db7e76b73d4495d8bd23226a4bbc1d8d/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/03/16280136951368.jpg',
    imageText: 'Image Text',
  },
];

const Farandula = [
  {
    title: "Erick Elera dedica mensaje a Allison Pastor tras su renuncia en vivo a Reinas del show",
    date: 'Nov 12',
    description:
      '',
    image: 'https://cde.peru.com//ima/0/1/5/4/3/1543412/924x530/allison-pastor-romero.jpg',
    imageText: 'Image Text',
  },
  {
    title: "Hombre le propone casamiento a su esposa con Alzheimer cada semana.",
    date: 'Nov 11',
    description:
      '',
    image: 'https://media.infocielo.com/p/f95fc0b8da67d3d96679b1522239b784/adjuntos/299/imagenes/001/282/0001282691/540x360/smart/video-viral-alzheimerjpg.jpg',
    imageText: 'Image Text',
  },
];

const featuredPosts = [
  {
    title: 'El presidente Biden habla sobre la respuesta de su administración a la tormenta tropical Henri y da una actualización sobre la situación en Afganistán.  ',
    description:
      '',
    image: 'https://s.france24.com/media/display/9c71e584-01e8-11ec-b1fc-005056a97e36/w:1280/p:16x9/BIDEN%201%20%284%29.webp',
    imageText: 'Image Text',
  },
  {
    title: 'Estados Unidos ordenó este domingo a varias aerolíneas comerciales asistir en la evacuación de los afganos.',
    date: 'Nov 11',
    description:
      '',
    image: 'https://media.vozpopuli.com/2021/08/20/biden-scaled-e1629496221361-1568x881.jpg',
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