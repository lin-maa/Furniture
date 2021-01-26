import React from 'react'

class UserInput extends React.Component {
    render() {
        const labelText = this.props.labelText;
        const inputText = this.props.inputText;
        const defaultText = this.props.defaultText;
        let labelClass = this.labelClass;
        return(
            <div>
                <label htmlFor={labelClass}>
                    {labelText}
                </label>
                <input type='text' 
                placeholder={defaultText}>
                    {inputText}
                </input>
            </div>
        )
    }
}

export default UserInput