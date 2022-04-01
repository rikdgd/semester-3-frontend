import React from 'react';
import '../../style/CreateForm.css'

const CreateAccountForm = () => {
    return(
        <div className='container form-container'>
            <h3 className='text-center'>Create user</h3>
            <form>
                <input type='text' className='form-control'></input>
            </form>
        </div>
    );
}

export default CreateAccountForm;