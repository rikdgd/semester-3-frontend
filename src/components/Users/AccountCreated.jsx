import React from 'react';
import { Link } from 'react-router-dom';


const AccountCreated = () => {
    
    return(
        <div className='container'>
            <h3 className='text-center'>Account has succesfully been created!</h3>
            <button className='btn btn-primary'><Link to='/' className='text-white'>back to home</Link></button>
        </div>
    );
}

export default AccountCreated;