import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(rectangle-3.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  typography: {
    subtitle1: {
      fontSize: 14,
    },
    h3: {
      fontSize: 52,
    },
  },
  text:{
    paddingTop: 319,
    marginBottom: 290,
   
  },
  card: {
    minWidth: 275,
  }
}));

const sections = [
  'Home',
  'About Us',
  'Our rooms',
  
  
];
const section2 = [

  'Reservation',
  'Blog',
  'Contact',
  
];


export default function Home() {
  const classes = useStyles();

  return (
    <div>
     <Container fixed>
      <Grid container spacing={3}>
       
        <Grid item xs>
        <Typography variant="subtitle1" gutterBottom>
        Contact us directly at 01 33943  +234 807 340 4890   
      </Typography>
        </Grid>
        <Grid item xs>
        <Typography variant="subtitle1" gutterBottom>
        ( Local time 12: 00 )
      </Typography>
        </Grid>
        
        <Grid item xs= {1}> 
        <Typography variant="subtitle1" gutterBottom>
        EN
      </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      
      </Container>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body2"
              href="#"
              className={classes.toolbarLink}
            >
              {section}
            </Link>
          ))}
          <img src="transcorp-1.jpg" alt="logo" className={classes.logo} />
          {section2.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body2"
              href="#"
              className={classes.toolbarLink}
            >
              {section}
            </Link>
          ))}
        </Toolbar>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src=""
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container alignItems="center" justify="center">
              <Grid item md={11}>
                <div className={classes.mainFeaturedPostContent}>
                  <Box p= {10} mx = "auto" >
                  <Typography style ={useStyles.text} align="center"component="h1" variant="subtitle1" color="inherit" gutterBottom>
                    WELCOME TO
                  </Typography>
                  <Typography align="center" variant="h3" color="inherit" >
                    TRANSCORP HOTEL
                  </Typography>
                  <Typography p ={400} align="center"component="h1" variant="subtitle1" color="inherit" gutterBottom>
                  A place to experience and enjoy the life
                  
                  </Typography>
                  <div
    style={{
        position: 'absolute', 
        left: '50%', 
        top: '75%',
        transform: 'translate(-50%, -50%)'
    }}
>
<img align="center" src="play.png" alt="logo" className={classes.logo} />

</div>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </Paper>
          </main>
          <div
    style={{
        position: 'absolute', 
        left: '50%', 
        top: '85%',
        transform: 'translate(-50%, -50%)'
    }}
>
          <Paper className={classes.root}>
          <Grid container spacing = {10}>
            <Grid item sm >
              24
            </Grid>
            <Grid item sm >
              29
              
            </Grid>
            <Grid item sm >
            03
            
            </Grid>
            <Grid item sm >
            hello
            
            </Grid>

          </Grid>
</Paper>
</div>
    </div>
  );
}

