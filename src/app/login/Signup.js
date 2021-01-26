import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

import '../../style.scss';
import ButtonInput from '../shared/button/Button.js'
import UserInput from '../shared/userinput/Userinput.js'
import BrandWhite from '../../imgs/brand_white.svg';
import LoginBack from './imgs/login_back.jpg';
import Login1 from './imgs/login.jpg';
import './login.scss';
import BrandHome from '../shared/homebrand/Homebrand';


// import LoginBack from './imgs/login_back.jpg'
// import ButtonInput from '../shared/button/Button';

class SignupPage extends React.Component {
    render() {
        return(
            <div>
                <div className='login-layout'>
                <img src={LoginBack} alt='' className='login-back-img'/>
                    <UpContainer />
                    <DownContainer />
                </div>
            </div>
         );
    }
}


class UpContainer extends React.Component {
    render() {
        return(
                <div className="up-content flex1">
                    <BrandHome/>
                    <h1 className='up-login'><span style={{color: "#F26C66"}}>Welcome</span> to our family.
                    </h1>
                    <p>Maynooth is updating account security!
                    An e-mail will be sent to you to verify your e-mail address.</p>
                     <p className="footer">Maynooth - Cookie Policy and Privacy Policy</p>
                </div>
        );

    }
}

class DownContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'Family',
            buttonfooter: NaN,
    }
    this.handleButtonFooterClick = this.handleButtonFooterClick.bind(this);
}
    renderText() {
        if (this.state.type === 'Family') {
            return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, \
            sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua.'
        } else if (this.state.type === 'Business') {
            return 'Ut enim ad minim veniam, quis nostrud exercitation ullamco \
            poriti laboris nisi ut aliquip ex ea commodo consequat. '
        }
    }
    handleButtonClick(type) {
       this.setState({type: type})
    }

    handleButtonFooterClick(type) {
        this.setState({buttonfooter: type})
     }
 

    render() {
        return(
                <div className="down-content flex2">
                      {/* <img src={Login1} alt=''/> */}
                    <div className="down-words">
                        <div className="button-content">
                            <ButtonInput name='Family Member' 
                                onButtonClick = {() => this.handleButtonClick('Family')}
                                className={this.state.type==='Family'?'button-inner active':"button-inner"} />
                            <ButtonInput  name='Business Member' 
                                className={this.state.type==='Business'?'button-inner active':"button-inner"}
                                onButtonClick = {() => this.handleButtonClick('Business')}/>
                        </div>
                        <div className="button-texts">
                            {this.renderText()}
                        </div>
                        <form name="Login" className="user-login">
                        <div className = 'form-content'>
                            <div className='flex3'>
                                <UserInput labelText='Name or nick' 
                                    defaultText = 'Your name...'
                                />
                                <UserInput labelText='E-mail' 
                                    defaultText = 'Your e-mail...'
                                />
                            </div>
                            <UserInput labelText='Telephone' 
                                    defaultText = 'Your phone Number...'
                                />
                            <div className='flex4'>
                                <UserInput labelText='Password' 
                                    defaultText = 'Your password...'
                                />
                            </div>
                        </div>
                        </form>
                        <div className='login-back'>
                            <ButtonInput name='Password recovery' 
                             onButtonClick = {() => this.handleButtonFooterClick('Password')}
                             className={this.state.buttonfooter==='Password'?'button-inner footer active':"button-inner footer"}/>
                            <Link to='./login'>
                                <ButtonInput name='Login' 
                                onButtonClick = {() => this.handleButtonFooterClick('Login')}
                                className={this.state.buttonfooter==='Login'?'button-inner footer active':"button-inner footer"}/>
                            </Link>
                        </div>
                        <div className='button-login'>
                            <ButtonInput name='Registration' className = 'login'/>
                        </div>
                    </div>
                        
                    </div>
        );

    }
}


export default SignupPage;