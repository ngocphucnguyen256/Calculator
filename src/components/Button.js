import React from 'react';
import "../componentsCss/Button.css";

 class Button extends React.Component {
    render() {
        return (
            <div className="button"
            onClick={this.props.onClick}
            dataSize={this.props.size}
            dataValue={this.props.value}>{this.props.label}</div>
        )
    }
}



export default Button;