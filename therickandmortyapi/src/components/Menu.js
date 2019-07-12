import React, {Fragment} from 'react';
import PersonajesCard from './PersonajesCard';
import EpisodesCard from './EpisodesCard';
import LocationCard from './LocationCard';
import { Grid } from '@material-ui/core';

function Menu({ rmDataP, rmDataE, rmDataL }) {
    return(
        <Fragment>
            <h1>Characters</h1>
            <Grid container justify="center">
                {rmDataP.map((personaje) =>{
                    let url = "https://rickandmortyapi.com/api/character/avatar/"
                    let charIndex = personaje.url.split('/')[personaje.url.split('/').length - 1]
                    return <PersonajesCard 
                                image={`${url}${charIndex}.jpeg`}
                                name={personaje.name}
                                status={personaje.status}
                                species={personaje.species}
                                gender={personaje.gender}
                            />
                })}
            </Grid>

            <h1>Episodes</h1>
            <Grid container sapacing={10} justify="center">
                {rmDataE.map((episodio) =>{
                    return <EpisodesCard 
                                name={episodio.name}
                                air_date={episodio.air_date}
                                episode={episodio.episode}
                            />
                })}
            </Grid>

            <h1>Locations</h1>
            <Grid container sapacing={15} justify="center">
                {rmDataL.map((locacion) =>{
                    return <LocationCard 
                                name={locacion.name}
                                type={locacion.type}
                                dimension={locacion.dimension}
                            />
                })}
            </Grid>
        </Fragment>
    );
}

export default Menu;