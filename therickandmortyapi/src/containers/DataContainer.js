import React, { Component } from 'react';
import axios from 'axios';
import Menu from '../components/Menu';
import SearchAppBar from '../components/NavBar';

class DataContainer extends Component {

    constructor(props){
        super(props)

        this.state = {
            rmDataP:[],
            rmDataE:[],
            rmDataL:[]
        }
    }

    componentDidMount(){
        axios.get('https://rickandmortyapi.com/api/character')
        .then(resP => {
            const rmDataP = resP.data.results;

            this.setState({
                rmDataP
            })
        })
        .catch(error => {
            console.log(error);
        });

        axios.get('https://rickandmortyapi.com/api/episode')
        .then(resE => {
            const rmDataE = resE.data.results;

            this.setState({
                rmDataE
            })
        })
        .catch(error => {
            console.log(error);
        });

        axios.get('https://rickandmortyapi.com/api/location')
        .then(resL => {
            const rmDataL = resL.data.results;

            this.setState({
                rmDataL
            })
        })
        .catch(error => {
            console.log(error);
        });
    }

    render(){

        const { rmDataP } = this.state;
        const { rmDataE } = this.state;
        const { rmDataL } = this.state;

        return(
            <>
                <SearchAppBar />
                <Menu rmDataP={rmDataP} rmDataE={rmDataE} rmDataL={rmDataL}/>
            </>
        );
    }
}

export default DataContainer;