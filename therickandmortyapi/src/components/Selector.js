import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl , Select} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  export default function SimpleSelect() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        category: '',
        name: '',
      });

    function handleChange(event) {
        setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
        }));
    }

    return (  
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Category</InputLabel>
                <Select
                value={values.category}
                onChange={handleChange}
                inputProps={{
                    name: 'category',
                    id: 'age-simple',
                }}
                >
                    <MenuItem value={1}>Characters</MenuItem>
                    <MenuItem value={2}>Locations</MenuItem>
                    <MenuItem value={3}>Episodes</MenuItem>
                </Select>
            </FormControl>
        </form>
    );
}