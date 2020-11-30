import React from 'react';
import BeersService from '../utils/api';
import { withRouter } from 'react-router-dom'; //For history usage

class AddBeer extends React.Component {
    state = {
        name: '',
        tagline: '',
        image_url: ''
    }

    handleChange = (event) => {
        let { name, value} = event.target;

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const beerService = new BeersService(); 
        beerService.addBeer(this.state).then(() => {
            //add and then redirect user to characters list 
            //cliking automatically to go forward to /characters
            //no need to LIFT UP THE STATE AS teh API is refreshing teh call
            this.props.history.push('/beers');
        });
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
            <h1>ADD YOUR BEERS</h1>
                <label>Name  </label>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                <br/>
                <label>Tagline  </label>
                <input type="text" name="tagline" onChange={this.handleChange} value={this.state.tagline} />
                <br/>
                <label>Image  </label>
                <input type="text" name="image_url" onChange={this.handleChange} value={this.state.image_url}/>
                <br/>
                <button>Create</button>
            </form>
        )
    }
}

export default withRouter(AddBeer);
//So the component can access the history of the Browser directly 