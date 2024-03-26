import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png'
import world from '../assets/world.png'
import InputGroup from 'react-bootstrap/InputGroup'; 
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function SearchBar() {
  return (
    <div>
      <div className='im'> 
        <img src={logo} alt='logo'  /> 
        <h1> ⬊ Discover what the weather is like around the world. ⬋</h1>
        <i class="bi bi-search"></i>
      </div>
      <div className='search'>
           <Link to="/Weather"  className='icon' ><BsSearch /> </Link>
      </div>
      <div>
        <img src={world} alt='world' className='world' />
      </div>
    </div>
      );
    }
    
export default SearchBar;