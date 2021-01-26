import React from 'react';
import './idea.scss'
import inspire_back from './imgs/inspire_back.jpg';
import InspireLeft from './imgs/inspire_2.jpg';
import InspireRight from './imgs/inspire_1.jpg';

class Inspiration extends React.Component{
    render() {
        return (
                <div className='home-ideas'>
                    <img src={inspire_back} alt='' className='idea-img'/>
                    <div className='left'>
                    <div className='title'>
                        Inspiration Ideas
                    </div>
                    <div className='text'>
                    <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut ero 
                    labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco poriti 
                    laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in uienply
                    voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat norin proident.
                    
                    </p>
                    </div>
                    <img src={InspireLeft} alt='' />
                    </div>
                    <div className='right'>
                        <img src={InspireRight} alt=''/>
                    </div>
                </div>
                )
    
            }
        }

export default Inspiration