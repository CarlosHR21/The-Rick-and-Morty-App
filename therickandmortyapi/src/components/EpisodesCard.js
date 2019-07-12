import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

function EpisodesCard({ classes, name, air_date, episode}){
    return(
        <Card className={classes.item}>
            <CardContent>
                <Typography component="p" variant="h6" >{ name }</Typography>
                <Typography component="p" variant="h7" >Air Date: { air_date }</Typography>    
                <Typography component="p" variant="h7" >Episode: { episode }</Typography>        
            </CardContent>
        </Card>
    );
}

export default withStyles({
    item:{
        minWidth: "300px",
        margin: "1em",
        textAlign: "center",
        boxSizing: "border-box"
    },
    media:{
        height: "300px"
    }
})(EpisodesCard);
