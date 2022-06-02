import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ( { setCategories,categories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        for(let i = 0; i < categories.length; i++){
            if(categories[i].toLowerCase() === inputValue.toLowerCase()){
                alert('This category already exists');
                setInputValue('');
                return;
            }
        }
        
        if(inputValue === '' || inputValue.length <= 2) {
            return alert('Please enter a correct category with more than 2 characters');
        }
        
        setCategories( cats => [inputValue,...cats ]);
        setInputValue('');

        
        
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory

