import React  from 'react';
import Button from  './Button.js';
import Keypad from  './Keypad.js';
import Display from  './Display.js';
import "../componentsCss/Calculator.css"

 class Calculator extends React.Component{
     constructor(props){
            super(props);
            this.state = {
                data: ''
            }
     }
     handleClick = e =>{
        const value= e.target.getAttribute('datavalue');
        switch (value){
            case 'clear': 
                this.setState({data: ''});
                break;
            case 'equal':
                this.calculate(); 
                break;
            case 'backspace':
                var slice=  this.state.data.slice(0,-1);
                this.setState({data : slice});
                break;
            default:
                this.setState({data: this.state.data + value});
         }
     }
     
     calculate =()=>{
         try{
             //eslint-disable-next-line
             const result = eval(this.state.data);
             this.setState({data: result});
         } catch(e){
             this.setState({data: 'error'})
         }
     }
        render() {
            return (
                <div className="calculator">
                    <Display data={this.state.data}/>
                    <Keypad>
                    <Button  onClick={this.handleClick} label="C" value="clear"/>
                    <Button   onClick={this.handleClick}  label="<=" value="backspace"/>
                    <Button onClick={this.handleClick} label="^" value="^"/>
                    <Button   onClick={this.handleClick}  label="/" value="/"/>


                    </Keypad>
                    <Keypad>
                    <Button onClick={this.handleClick}    label="7" value="7"/>
                    <Button  onClick={this.handleClick}   label="8" value="8"/>
                    <Button   onClick={this.handleClick}  label="9" value="9"/>
                    <Button onClick={this.handleClick} label="x" value="x"/>


                    </Keypad>
                    <Keypad>
                    <Button onClick={this.handleClick} label="4" value="4"/>
                    <Button  onClick={this.handleClick}   label="5" value="5"/>
                    <Button onClick={this.handleClick} label="6" value="6"/>
                    <Button   onClick={this.handleClick}  label="-" value="-"/>


                    </Keypad>
                    <Keypad>
                    <Button  onClick={this.handleClick}   label="1" value="1"/>
                    <Button  onClick={this.handleClick}   label="2" value="2"/>
                    <Button   onClick={this.handleClick}  label="3" value="3"/>

                    <Button onClick={this.handleClick} label="+" value="+"/>

                    </Keypad>
                    <Keypad>
                    <Button   onClick={this.handleClick}  label="." value="."/>
                    <Button  onClick={this.handleClick}   label="0" value="0"/>
                    <Button onClick={this.handleClick} label="mod" value="%"/>

                    <Button   onClick={this.handleClick}  label="=" value="equal"/>
 
                    </Keypad>


       
                </div>
            )
        }
}

export default Calculator;