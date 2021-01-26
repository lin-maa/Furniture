import React from 'react';
import './login.scss';
import '../app/shared/buttonlogin/ButtonLogin.js'

import ContactBack from './imgs/contact_back.jpg'
import ButtonInput from '../app/shared/button/Button';

class ContactPage extends React.Component {
    render() {
        return(
            <div>
                <div className='contact-layout'>
                    <img src={ContactBack} alt=''/>
                <div className='title'>
                    <p>Contact Us</p>
                </div>
                <div className='left'>

                </div>
                <div className='right'>
                    {/* <ButtonLogin /> */}
                    </div>
            </div>
         </div>
         );
    }
}

export default ContactPage;