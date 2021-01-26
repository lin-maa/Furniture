import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import '../style.scss';
import './hero.scss';
import SearchBar from '../../shared/searchbar/Searchbar.js'
import ButtonInput from '../../shared/button/Button.js'

import BrandWhite from '../../../imgs/brand_white.svg';
import Hero1 from './imgs/header_background_1.svg';

class Hero extends React.Component {
    render() {
        return(
            <div className = 'hero-layout'>
                <img src={Hero1} alt=''className='hero-img'/>
                <div className ='hero-search'>
                <div className = 'hero-search-up'>
                <img src={BrandWhite} alt=''/>
                    <SearchBar/>        
                    <div className='hero-shopping'>
                        <Link to='/living-room'>
                            <ButtonInput name='Start shopping' className = 'search-shopping' />
                        </Link>
                        <Link to='/login'>
                            <ButtonInput name='Login / Sign up' className = 'search-login'/>
                        </Link>
                    </div>
                 </div>   
                </div>
            </div>
        )
    }
}

export default Hero;
