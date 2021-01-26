import React from 'react';
import {Link} from 'react-router-dom';
import './sofa.scss';
import ButtonInput from '../shared/button/Button.js'
import Navigation from '../shared/nav/Navigation.js'
import ProductHero from './imgs/brand_white_small.svg'
import { render } from 'sass';

class ProductPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
    
        }
    this.handleBasket = this.handleBasket.bind(this);
    this.handleBasketItems = this.handleBasketItems.bind(this);

    }


    render() {
        return(
            <div>
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
            </div>
        )
    } 
}

export default ProductPage;
