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
                            <a>{expansion.id}</a>
                            <br/>
                            <a>{expansion.name}</a>
                            <br/>
                            <a>{expansion.releaseDate}</a>
                        </div>
                    ))
                }
            </div>
         );
    }
}
 
export default ExpansionList;