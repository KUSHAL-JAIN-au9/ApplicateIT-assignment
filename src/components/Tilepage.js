import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth:300,
    marginTop:100,
    backgroundColor:'royalblue',
    color:'white'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },
  row1:{
    fontSize: 20,
    marginBottom:10
  },
  row2:{
    fontSize: 18,
    marginTop:10
  }
});

export default function TilePage({row1,row2,value1,value2}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">  
      <CardContent>
      
        <Typography variant="h5" className={classes.row1} component="h2">
         {row1}:{value1}
        </Typography>
        <Typography variant="h5" className={classes.row2} component="h2">
         {row2}:{value2}
        </Typography>
      
      </CardContent>
    </Card>
  );
}