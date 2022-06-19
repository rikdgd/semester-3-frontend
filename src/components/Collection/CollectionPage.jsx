import React, { Component } from 'react';
import SessionHandler from '../../SessionHandler';
import CollectionService from '../../services/CollectionService';

class CollectionPage extends Component {
    constructor(props) {
        super(props);
        const userId = SessionHandler.GetUserId();

        this.state = {
            collection: CollectionService.GetCollectionByUserId(userId)
        }
    }

    render() { 
        return ( 
            <div className='container'>
                collection
            </div>
         );
    }
}
 
export default CollectionPage;