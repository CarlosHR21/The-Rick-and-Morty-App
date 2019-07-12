import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      color:"#0ea9cc",
    },
    input: {
      display: 'none',
    },
  }));
  
  export default function BotonMenu() {
    const classes = useStyles();
  
    return (
      <div>
        <Button variant="outlined" color="inherit" className={classes.button} href="../Menu">Usar Portal</Button>
      </div>
    );
  }
