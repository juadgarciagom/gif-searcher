import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs'


export const AddKeyword = ( {setKeywords, keywords} ) => {

    const [keyText, setKeyText] = useState('');

    const handleInputChange = (event) => {
        setKeyText(event.target.value);
    };

    const handleEnterInput = (event) => {
        event.preventDefault();
        setKeywords([keyText, ...keywords]);
        setKeyText('');
    }

    return (
        <div className='input_text'>
            <Form onSubmit={handleEnterInput}>
                <Form.Control placeholder="Busca los mejores GIF's" 
                            type="text" 
                            maxLength="15" 
                            value={keyText} 
                            onChange={handleInputChange}
                            style={{ border: "0" }} 
                />
            </Form>
            <BsSearch className="icon_search" />
        </div>
    )
};

AddKeyword.propTypes = {
    setKeywords: Proptypes.func.isRequired,
    keywords: Proptypes.array.isRequired
};
 