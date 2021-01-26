import React from 'react';
import './style.scss';
import ButtonInput from '../shared/button/Button.js'
import Navigation from '../shared/nav/Navigation.js'
import Hero from './hero/Hero.js'
import HomeCatalogue from './catalogue/Catalogue.js'
import Inspiration from './idea/Idea.js'

class HomePage extends React.Component {

render() {
        return( 
            <div>
                <Navigation />
                <div className ='home-hero'>
                    <Hero />
                </div>
                <HomeCatalogue/>
                <div className='home-new'>
                    <ButtonInput />
                    <ButtonInput />
                    <ButtonInput />
                </div>
                    <Inspiration />
                <div className='home-clearance'>

                </div>
            </div>
        );
}
}



export default HomePage;
