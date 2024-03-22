import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


function SearchBar() {
  return (
    <div className='search'>
        <Form.Control className='bvb' type="text" placeholder="Search Location" />
    </div>
      );
    }
    
export default SearchBar;