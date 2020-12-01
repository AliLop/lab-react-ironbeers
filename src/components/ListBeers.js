import React from 'react';
import BeersService from '../utils/api';
import { Link } from 'react-router-dom';

class ListBeers extends React.Component {
    state = {
        beers: []
    }

    componentDidMount() {
        const beersService = new BeersService();
        beersService.getAll()
            .then((response) => {
                console.log(response);
                this.setState({
                    beers: response.data //data is general axios call
                })
            }); 
    }

    handleSearchBeer = (event) => {
        const value = event.target.value;
        const beersService = new BeersService();
        beersService.searchBeer(value)
            .then((response) => {
                this.setState({
                    beers: response.data
                })
            })

    }
    render() {
        return(
            <div>
            <h3> List of beers </h3>
            <form>
            <input onChange={this.handleSearchBeer}></input>
            </form>
            
            {this.state.beers.map((beer) => {
                return (
                    <div key={beer._id}>
                    <Link to={`beers/${beer._id}`}>{beer.name}</Link> 
                    <p>{beer.tagline}</p>
                    <img src={beer.image_url} />
                    </div>
                )
            })}
            </div>
        )
    }
}

export default ListBeers;