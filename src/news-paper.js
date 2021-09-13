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
  title: 'A 29 años de la captura de Abimael Guzmán (y a propósito de su muerte), desmentimos algunos mitos sobre su arresto',
  description:
    '',
  image: 'https://pbs.twimg.com/media/E_HoAGVXoAA1TK9.jpg:large',
  imgText: 'main image description',
  linkText: 'image',
};

const Politica = [
  {
    title: 'Cercado de Lima: ministro de Cultura, Ciro Gálvez, inspecciona los trabajos en el complejo arqueológico Mateo Salado.',
    date: 'Nov 12',
    description:
      '',
    image: 'https://cdn.www.gob.pe/uploads/document/file/2170708/standard_Ministro%20de%20Cultura%3A%20%E2%80%9CInvoco%20a%20los%20municipios%20a%20parar%20con%20las%20invasiones%20en%20los%20sitios%20arqueol%C3%B3gicos%E2%80%9D.jpeg',
    imageText: 'Image Text',
  },
  {
    title: " Presidente PedroCastilloTe: Saludo a las bancadas del Congreso que han dejado algunas malas actitudes para sentarnos a conversar y poner una agenda llamada Perú.",
    date: 'Nov 11',
    description:
      '',
    image: 'https://larepublica.pe/resizer/S3OHKcgMaQ-3_ouS9mWdJke2EA0=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/HFRTOOBQHEZTSY3GMU4TIZRTGU.jpg',
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
    title: "¡ESTUVO CERCA! Mira con nuestra cámara exclusiva  a ras de cancha el momento en que Hernán Barcos  tuvo el primer tanto de ClubALoficial , pero un atento Raúl Fernández fue más",
    date: 'Nov 12',
    description:
      '',
    image: 'https://radiokaribena.pe/wp-content/uploads/2021/02/mauri-fernandez.png',
    imageText: 'Image Text',
  },
  {
    title: "¡Gran gesto! El equipo masculino de Alianza Lima salió a jugar su partido ante Binacional con los apellidos de las jugadoras del plantel femenino, quienes salieron campeonas de la LigaFemeninaxMDeportes 2021.",
    date: 'Nov 11',
    description:
      '',
    image: 'https://cdn.futbolperuano.com/sdi/2021/09/12/jugadores-de-alianza-lima-llevaran-camisetas-con-el-nombre-de-su-plantel-femenino-ante-binacional-950893.jpg',
    imageText: 'Image Text',
  },
  {
    title: '¡REMONTADA BLANQUIAZUL!  Jefferson Farfán se encargó de anotar un golazo de tiro libre para darle el triunfo por 3-2 a Alianza Lima frente a Binacional. ¡Los blanquiazules siguen como firmes líderes de la Fase 2! ',
    date: 'Nov 12',
    description:
      '',
    image: 'https://larepublica.pe/resizer/qXNppZsNhW2OZHy3l90TcJ0nceI=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/UVLVUP6E4NBKRF3DNCLCCENRUE.jpg',
    imageText: 'Image Text',
  },
];

const Farandula = [
  {
    title: "Magaly Medina revela que perdió las esperanzas de internacionalizarse: “Ya lo intenté”",
    date: 'Nov 12',
    description:
      '',
    image: 'https://www.expreso.com.pe/wp-content/uploads/2019/11/Magaly-Medina.jpg',
    imageText: 'Image Text',
  },
  {
    title: "Reinas del show 2: ¿quiénes se quedaron y cuántas fueron a sentencia en la segunda gala?",
    date: 'Nov 11',
    description:
      '',
    image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAM1RAb.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f&x=618&y=121',
    imageText: 'Image Text',
  },
];

const featuredPosts = [
  {
    title: 'No había cuerpos completos: Topos mexicanos recuerdan las labores de rescate tras los ataques del 9/11.',
    description:
      '',
    image: 'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2014/09/26/140926130304_topos_624x351_ap.jpg',
    imageText: 'Image Text',
  },
  {
    title: 'Como instrumento para construir una narrativa rebelde, las criptomonedas pueden ser muy útiles como activo no reconocido por ningún otro país del mundo, Bukele se enfrentará a un golpe de realidad.',
    date: 'Nov 11',
    description:
      '',
    image: 'https://imagenes.elpais.com/resizer/Jpst_sSIdMbAEpvxvwWyprlKaxY=/980x735/cloudfront-eu-central-1.images.arcpublishing.com/prisa/3ZUSXX2FSUPYT336YD53TU2PE4.jpg',
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
