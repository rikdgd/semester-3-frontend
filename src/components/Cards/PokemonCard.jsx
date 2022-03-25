import React, { Component } from 'react';
import CardImage from '../../images/Rik_Monster.png'

class PokemonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {card: props.card};
        this.pokemonUrl = 'card/' + props.card.id;
    }

    render() { 
        return ( 
            <div className="card" key={this.state.card.id}>
                <div className="card-body">
                    <h5 className="card-title">{this.state.card.name}</h5>
                    <img className='card-image-top cardImage' src={CardImage} alt='cardImage'></img>
                    <p className="card-text">{this.state.card.healthPoints}HP</p>
                    <a className="btn btn-primary buy-btn" href={this.pokemonUrl}>info</a>
                </div>
            </div>
         );
    }
}
 
export default PokemonCard;