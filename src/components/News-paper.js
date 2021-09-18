import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Posting from './Post';
import TopMain from './TopMain';

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



const General = {
  title: 'A 29 años de la captura de Abimael Guzmán (y a propósito de su muerte), desmentimos algunos mitos sobre su arresto',
  image: 'https://pbs.twimg.com/media/E_HoAGVXoAA1TK9.jpg:large',
};

const Politica = [
  {
    title: 'Cercado de Lima: ministro de Cultura, Ciro Gálvez, inspecciona los trabajos en el complejo arqueológico Mateo Salado.',
    image: 'https://cdn.www.gob.pe/uploads/document/file/2170708/standard_Ministro%20de%20Cultura%3A%20%E2%80%9CInvoco%20a%20los%20municipios%20a%20parar%20con%20las%20invasiones%20en%20los%20sitios%20arqueol%C3%B3gicos%E2%80%9D.jpeg',
  },
  {
    title: " Presidente PedroCastilloTe: Saludo a las bancadas del Congreso que han dejado algunas malas actitudes para sentarnos a conversar y poner una agenda llamada Perú.",
    image: 'https://larepublica.pe/resizer/S3OHKcgMaQ-3_ouS9mWdJke2EA0=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/HFRTOOBQHEZTSY3GMU4TIZRTGU.jpg',
    imageText: 'Image Text',
  },
  {
    title: "Ministro del Ambiente, Rubén Ramírez, visita feria de productos ecológicos y sostenibles en San Borja.",
    image: 'https://industriaspesqueras.com/imagenes/genericas/standard_232130430_10159904317109973_5816754285378887220_n.jpg',
  },
];

const Deporte = [
  {
    title: "¡ESTUVO CERCA! Mira con nuestra cámara exclusiva  a ras de cancha el momento en que Hernán Barcos  tuvo el primer tanto de ClubALoficial , pero un atento Raúl Fernández fue más",
    image: 'https://radiokaribena.pe/wp-content/uploads/2021/02/mauri-fernandez.png',
  },
  {
    title: "¡Gran gesto! El equipo masculino de Alianza Lima salió a jugar su partido ante Binacional con los apellidos de las jugadoras del plantel femenino, quienes salieron campeonas de la LigaFemeninaxMDeportes 2021.",
    image: 'https://cdn.futbolperuano.com/sdi/2021/09/12/jugadores-de-alianza-lima-llevaran-camisetas-con-el-nombre-de-su-plantel-femenino-ante-binacional-950893.jpg',
  },
  {
    title: '¡REMONTADA BLANQUIAZUL!  Jefferson Farfán se encargó de anotar un golazo de tiro libre para darle el triunfo por 3-2 a Alianza Lima frente a Binacional. ¡Los blanquiazules siguen como firmes líderes de la Fase 2! ',
    image: 'https://larepublica.pe/resizer/qXNppZsNhW2OZHy3l90TcJ0nceI=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/UVLVUP6E4NBKRF3DNCLCCENRUE.jpg',
  },
];

const Farandula = [
  {
    title: "Magaly Medina revela que perdió las esperanzas de internacionalizarse: “Ya lo intenté”",
    image: 'https://www.expreso.com.pe/wp-content/uploads/2019/11/Magaly-Medina.jpg',
  },
  {
    title: "Reinas del show 2: ¿quiénes se quedaron y cuántas fueron a sentencia en la segunda gala?",
    image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAM1RAb.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f&x=618&y=121',
  },
];

const Mundial = [
  {
    title: 'No había cuerpos completos: Topos mexicanos recuerdan las labores de rescate tras los ataques del 9/11.',
    image: 'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2014/09/26/140926130304_topos_624x351_ap.jpg',
  },
  {
    title: 'Como instrumento para construir una narrativa rebelde, las criptomonedas pueden ser muy útiles como activo no reconocido por ningún otro país del mundo, Bukele se enfrentará a un golpe de realidad.',
    image: 'https://imagenes.elpais.com/resizer/Jpst_sSIdMbAEpvxvwWyprlKaxY=/980x735/cloudfront-eu-central-1.images.arcpublishing.com/prisa/3ZUSXX2FSUPYT336YD53TU2PE4.jpg',
  },
];

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
            <TopMain post={General}></TopMain>
          </Grid>
          <Grid item xs ={3} className={classes.rojo}>
           {Deporte.map((post) => (
              <Posting posti={post}/>
            ))}
          </Grid>
          </Grid>
          <Grid container direction = 'row' spacing={3}>
          <Grid item xs ={12} sm = {6} className={classes.azul}>
           {Mundial.map((post) => (
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
