import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

function LocationCard({ classes, name, type, dimension}){
    return(
        <Card className={classes.item}>
            <CardContent>
                <Typography component="p" variant="h6">{ name }</Typography>
                <Typography component="p" variant="h7">Type: { type }</Typography>
                <Typography component="p" variant="h7">Dimension: { dimension }</Typography>    
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
})(LocationCard);
