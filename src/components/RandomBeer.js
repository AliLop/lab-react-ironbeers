import React from 'react'; 
import BeersService from '../utils/api';

class RandomBeer extends React.Component {
    state = {
        name: '',
        tagline: '',
        image_url: ''
    }

    componentDidMount() {
        const beersService = new BeersService(); 
        beersService.getRandomBeer().then((response) => {
            this.setState({
                name: response.data.name,
                tagline: response.data.tagline,
                image_url: response.data.image_url
            })
        })
    }
    render() {
        return(
            <div>
            <h2>{this.state.name}</h2>
            <p>{this.state.tagline}</p>
            <img src={this.state.image_url} />
            </div>
        )
    }
}

export default RandomBeer; 