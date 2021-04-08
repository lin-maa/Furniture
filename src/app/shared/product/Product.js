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
        )
    } 
}

export default ProductPage;
