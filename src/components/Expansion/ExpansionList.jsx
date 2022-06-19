import React, { Component } from 'react';
import ExpansionService from '../../services/ExpansionService';

class ExpansionList extends Component {

    state = { 
        expansions: []
     }

     componentDidMount(){
        ExpansionService.GetAllExpansions().then((result) => {
            this.setState({expansions: result.data});
        });
     }

    render() { 
        return ( 
            <div>
                {
                    this.state.expansions.map((expansion) => (
                        <div className='container' key={expansion.id}>
                            <p>{expansion.id}</p>
                            <p>{expansion.name}</p>
                            <p>{expansion.releaseDate}</p>
                            {
                                expansion.cards.map((card) => (
                                    <p key={card.id}>---{card.name}---</p>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
         );
    }
}
 
export default ExpansionList;