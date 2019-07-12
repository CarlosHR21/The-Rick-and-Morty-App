import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

function PersonajesCard({ classes , image, name, status, species, gender}){
    return(
        <Card className={classes.item}>
            <CardMedia className={classes.media} image={image}/>
            <CardContent>
                <Typography component="p" variant="h6" >{ name }</Typography>
                <Typography component="p" variant="h7" >Status: { status }</Typography>
                <Typography component="p" variant="h7" >Specie: { species }</Typography>
                <Typography component="p" variant="h7" >Gender: { gender }</Typography>
            </CardContent>
        </Card>
    );
}

export default withStyles({
    item:{
        minWidth: "300px",
        textAlign: "center",
        boxSizing: "border-box",
        margin: "1em"
    },
    media:{
        height: "300px"
    }
})(PersonajesCard);
