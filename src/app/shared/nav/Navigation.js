import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory
  } from "react-router-dom";

import '../../../style.scss';
import './nav.scss';
import SearchBar from '.././searchbar/Searchbar.js'

import BrandWhite from '../../../imgs/brand_white.svg';
import MyOrder from './imgs/my_order_icon.svg';
import Basket from './imgs/basket_icon.svg';
import Login from './imgs/login_icon.svg';
import ButtonInput from '../../shared/button/Button';
import BrandHome from '../../shared/homebrand/homebrand.js';

class Navigation extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name:'home',
    //     }

    //     this.handleButtonClick = this.handleButtonClick.bind(this);
    // }

    // handleButtonClick(name){
    //     let history = useHistory();

    //     if(this.state.name === 'home'){
    //         return (
    //             <Link to="/">Home</Link>
    //             // history.push("/")
    //         );
    //     } else if(this.state.name === 'myorder'){
    //         return (
    //         <Link to="/">Home</Link>
    //         // history.push("/")
    //         );
    //     }
    //     else if(this.state.name === 'login'){
    //         return (
    //             // history.push("/login")
    //             <Link to="/login">Login</Link>
    //             );
    //         }
    //     else if(this.state.name === 'basket'){
    //         return (
    //             history.push("/")
    //             // <Link to="/">Home</Link>
    //             );
    //         }
    // }

    render() {
        return(
            <div className='nav'>
                <BrandHome />
                {/* <Link to="/">   
                 <ButtonInput imgName={BrandWhite} name=''/>
                </Link> */}
                <SearchBar />
                <div className='nav-button'>
                <Link to="/">    
                    <ButtonInput imgName={MyOrder} name='MY ORDER' />
                </Link>
                <Link to='/login'>
                    <ButtonInput imgName={Login} name='LOGIN' />
                </Link>
                <Link to="/">   
                    <ButtonInput imgName={Basket} name='BASKET' />
                </Link>       

                    {/* <ButtonInput imgName={MyOrder} name='MY ORDER' 
                    onButtonClick={() => this.handleButtonClick('myorder')} />
                    {/* <Link to="/">Home </Link> */}
                    {/* <ButtonInput imgName={Login} name='LOGIN' 
                    onButtonClick={() => this.handleButtonClick('login')} />
                    <ButtonInput imgName={Basket} name='BASKET' 
                    onButtonClick={() => this.handleButtonClick('basket')} /> */} 
                </div>
            </div>
        );
    }
}

export default Navigation;