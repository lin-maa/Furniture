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

import BrandWhite from '../../../imgs/brand_white.svg';
// import ButtonInput from '../../shared/button/Button';

class BrandHome extends React.Component {
    render() {
        return (
            <Link to='/'>
                <img src={BrandWhite} alt=''/>
            </Link>
        )
    }
}
export default BrandHome;