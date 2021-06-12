import React from 'react';
import "../componentsCss/Display.css"

 class Display extends React.Component {
    render() {
        return(
            <div className="display">
                {this.props.data}
            </div>
        )
    }
}


export default Display;