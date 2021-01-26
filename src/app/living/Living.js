import React from 'react';
import {Link} from 'react-router-dom';
import './living.scss';
import ButtonInput from '../shared/button/Button.js'
import Navigation from '../shared/nav/Navigation.js'
import BrandwhiteSmall from '../../imgs/brand_white_small.svg'

// import Hero from './hero/Hero.js'
// import HomeCatalogue from './catalogue/Catalogue.js'
// import Inspiration from './idea/Idea.js'
import LivingBack from './imgs/living-room.jpg'
// import ArmChair from './imgs/armchair.jpg'
// import Lightning from './imgs/lighting.jpg'
// import Soft from './imgs/soft-fur.jpg'
import Sofa from './imgs/sofa.jpg'
// import Accessory from './imgs/accessory.jpg'

class LivingPage extends React.Component {

render() {
        return( 
            <div>
                <Navigation />
                <div className='living'>
                <div className ='living-hero'>
                    {/* <img src={LivingBack} alt='' className='back-img'/> */}
                    <div className='hero'>
                        <div className='title'>
                        <img src={BrandwhiteSmall} alt=''/>
                        Living room
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                            no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            </p>
                    </div>
                </div>
                <div className='products'>
                <div className='title'>
                    Products
                </div>
                <div className = 'category'>
                    <Link to='./'>
                        <ButtonInput imgName={Sofa} name='Sofa' className='category-sofa'/>
                    </Link>
                    <Link to='./'>
                        <ButtonInput imgName={Sofa} name='Sofa' className='category-sofa'/>
                    </Link>
                    <Link to='./'>
                        <ButtonInput imgName={Sofa} name='Sofa' className='category-sofa'/>
                    </Link>
                </div>

                <div className = 'category'>
                    <Link to='./'>
                        <ButtonInput imgName={Sofa} name='Sofa' className='category-sofa'/>
                    </Link>
                    <Link to='./'>
                        <ButtonInput imgName={Sofa} name='Sofa' className='category-sofa'/>
                    </Link>
                    <Link to='./'>
                        <ButtonInput imgName={Sofa} name='Sofa' className='category-sofa'/>
                    </Link>
                </div>
                </div>

                </div>
                </div>
        );
}
}

// class ItemSelect extends React.Component {
//     render() {
//         return(
//             <div>
//                 <ButtonInput
//             </div>
//         )
//     }
// }



export default LivingPage;
