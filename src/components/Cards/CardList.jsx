import React, { Component } from 'react';
import '../../style/CardList.css'
import CardService from '../../services/CardService';
import PokemonCard from './PokemonCard';


class CardList extends Component {

    state = { cards: [] }

    componentDidMount(){
        CardService.GetRandomCardCollection().then((result) => {
            this.setState({cards: result.data});
        });
    }


    render() { 
        return ( 
            <div className='cardContainer'>
            {
                this.state.cards.map((card) => (
                    <PokemonCard card={card} />
                ))
            }
            </div>
         );
    }
}
 
export default CardList;