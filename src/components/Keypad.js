import React from 'react';
import "../componentsCss/Keypad.css"
 class Keypad extends React.Component {
    render(){
        return (
            <div className="keypad">
                {this.props.children}
            </div>
            
        )
    }
}

export default Keypad;