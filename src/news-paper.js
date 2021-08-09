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
  title: 'Lionel Messi se despide entre lágrimas del FC Barcelona: "Llegué con 13 años, siendo muy chiquito; después de 21 años, me voy".  ',
  description:
    '',
  image: 'https://media.diariolasamericas.com/p/2a3dce4e2856f6db8f330a80f3d12a87/adjuntos/216/imagenes/002/383/0002383183/el-delantero-argentino-del-barcelona-lionel-messi-llora-al-comienzo-una-conferencia-prensa-el-estadio-camp-nou-barcelona.jpg',
  imgText: 'main image description',
  linkText: 'image',
};

const Politica = [
  {
    title: "Buena noticia! Ya son más de 6 millones de peruanos que recibieron su segunda dosis de la vacuna contra la Covid-19.",
    date: 'Nov 12',
    description:
      '',
    image: 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2021/06/24/000784528W.jpg',
    imageText: 'Image Text',
  },
  {
    title: "San Martín de Porres: al menos 140 personas fueron intervenidas en recinto que funcionaba como discoteca y prostíbulo clandestino. ",
    date: 'Nov 11',
    description:
      '',
    image: 'http://cde.2.trome.pe/ima/0/0/9/9/7/997534.jpg',
    imageText: 'Image Text',
  },
  {
    title: "Guido Bellido no descarta indulto a Antauro Humala: 'Un gobierno debe tener sentimiento humano'",
    date: 'Nov 12',
    description:
      '',
    image: 'https://larepublica.pe/resizer/SPQszv8fWqp9vtiP8S4Kbh0hJLc=/480x282/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/POQTULSB3JB4TOCCO2JKYBGC3E.jpg',
    imageText: 'Image Text',
  },
];

const Deporte = [
  {
    title: "Alianza Lima venció 2-0 a la San Martín por la fecha 5 de la Liga 1 Betsson. El cuadro blanquiazul está primero en el Torneo Clausura con 11 puntos.  J. Ballón 22' y J. Concha 83'",
    date: 'Nov 12',
    description:
      '',
    image: 'https://larepublica.pe/resizer/i4kvKsxUIQYGDKWC6VC-jcMLnew=/1250x735/top/smart/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/IGOL4LP33ZDRJOZNKPHFNIFQCY.jpg',
    imageText: 'Image Text',
  },
  {
    title: "Argentinos Juniors y Boca Juniors empataron 1-1 en la Bombonera, por la fecha 5 de la Fase 2 de la Liga Argentina.   Luis Advíncula entró a los 86'. Zambrano no jugó.",
    date: 'Nov 11',
    description:
      '',
    image: 'https://t.resfu.com/media/img_news/agencia-efe_multimedia_2903131.multimedia.photos.11694709.file.jpg?size=776x&q=60',
    imageText: 'Image Text',
  },
  {
    title: 'COMIENZA LA CONFERENCIA DE PRENSA! Lionel Messi declara en el Camp Nou tras su salida inesperada del FC Barcelona.',
    date: 'Nov 12',
    description:
      '',
    image: 'https://fotos.perfil.com/2021/08/07/trim/1280/720/lionel-messi-1214861.jpg',
    imageText: 'Image Text',
  },
];

const Farandula = [
  {
    title: "Yidda Eslava y Julián Zucchi se vacunaron contra la COVID-19: 'Vengan a vacunarse todos por el Perú'.",
    date: 'Nov 12',
    description:
      '',
    image: 'https://e.rpp-noticias.io/normal/2020/04/17/102110_929096.jpg',
    imageText: 'Image Text',
  },
  {
    title: "Lionel Messi se va del Barcelona al PSG: conferencia en vivo desde el Camp Nou: hora y canal",
    date: 'Nov 11',
    description:
      '',
    image: 'https://elpopular.cronosmedia.glr.pe/original/2021/08/08/610f822a8ddba22fbb5003bd.jpg',
    imageText: 'Image Text',
  },
];

const featuredPosts = [
  {
    title: ' Una residente de Florida de 99 años entra en el Libro Guinness al convertirse en la pesista de más edad del mundo.   Puede levantar hasta 150 libras.',
    date: 'Nov 12',
    description:
      '',
    image: 'https://img.nbc.com/sites/nbcunbc/files/images/2021/8/07/17917013423-hd.jpg',
    imageText: 'Image Text',
  },
  {
    title: ' Actualmente, Florida es el epicentro de la pandemia en el país, pero en otros estados las cifras de contagios y hospitalizaciones por covid-19 también son preocupantes.',
    date: 'Nov 11',
    description:
      '',
    image: 'https://800noticias.com/cms/wp-content/uploads/2020/04/Miami-Dade-coronavirus.jpg',
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