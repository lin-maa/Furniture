import React from 'react';
import './button.scss'

class ButtonInput extends React.Component {
    render() {
            const name = this.props.name;
            const imgName = this.props.imgName;
            // const active = this.props.active
            const onButtonClick = this.props.onButtonClick
            return(
                <div>
                    <img src={imgName} alt='' onClick={onButtonClick}/>
                    <button onClick={onButtonClick} 
                    className={this.props.className}>
                        {name}
                    </button>
                    </div>
        )
    }
}

export default ButtonInput;