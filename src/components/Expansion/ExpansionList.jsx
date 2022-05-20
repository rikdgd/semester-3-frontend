import React from 'react';
import ExpansionService from '../../services/ExpansionService';

const ExpansionList = () => {

    const [expansions, setExpansion] = React.useState();

    ExpansionService.GetAllExpansions().then((result) => {
        setExpansion(result.data);
    })


    return(
        <div>
            {
                expansions.map((expansion) => (
                    <div className='container' key={expansion.id}>
                        <a>{expansion.name}</a>
                        <br/>
                        <a>{expansion.releaseDate}</a>
                        <br/>
                        <a>{expansion.id}</a>
                        <br/>
                        {/* <nav>
                            <Link to={user.id.toString()} className='btn btn-primary'>view</Link>
                        </nav> */}
                    </div>
                ))
            }
        </div>
    );
}

export default ExpansionList;