import React from 'react';
import '../style.scss';
import './catalogue.scss';
import ButtonInput from '../../shared/button/Button.js';
// import LivingPage from '../../living/Living.js';
import {Link} from 'react-router-dom';

import SearchBedroom from './imgs/bedroom.jpg';
import SearchLivingRoom from './imgs/living-room.jpg';
import SearchKitchen from './imgs/kitchen.jpg';

class HomeCatalogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'living',
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleTextChange(name){
        if(this.state.name === 'living'){
            return 'Living...';
        } else if(this.state.name === 'bedroom'){
            return 'Bedroom...';
        } else if(this.state.name === 'kitchen'){
            return 'Ketchen...';
        }
    }

    handleButtonClick(content){
        this.setState({name:content})
    }

    render() {
        return(
        <div className='home-catalogue'>
            <div className='title'>
                Search by Rooms
                    </div>
                    <div className='catalogue-button'>
                    <Link to='./living-room'>
                        <ButtonInput imgName = {SearchLivingRoom} name='Living Room' 
                        onButtonClick={() => this.handleButtonClick('living')} />
                    </Link>    
                    <Link to='./living-room'>
                        <ButtonInput imgName = {SearchBedroom} name='Bedroom'
                        onButtonClick={() => this.handleButtonClick('bedroom')} />
                    </Link> 
                    <Link to='./living-room'>  
                    <ButtonInput imgName = {SearchKitchen} name='Kitchen & Dining'
                        onButtonClick={() => this.handleButtonClick('kitchen')} />
                    </Link>    
                    </div>
                    <div>
                        {this.handleTextChange(name)}
                    </div>
                </div>
                )
    }
}

export default HomeCatalogue
