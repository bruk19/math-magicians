import React from "react"
import calculate from "../logic/calculate"
import operate from "../logic/operate"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.state = {value: ''};
     
    }
    handleValueChange(newValue) {
        this.setState({value: newValue});

    }
         createDigits = () => {
        const digits = [];

        for (let i = 9; i > 0; i--) {
            digits.push(
                <button onClick={() => this.setState(i.toString())} key={i}>{i}</button>
            )
        }
        return digits;
    }
    
    render() {
        return (
        
        <div className="App">
        <div className="calculator">
            <div className="display">
                {result ? <span>0</span> : '' }
                { value }
            </div>
          
            <div className="operators">
                <div className="digits">
                    <button onClick={() => calculate('AC')}>AC</button>
                    <button onClick={() => operate('-')}>+/-</button>
                    <button onClick={() => operate('%')}>%</button>
                   {this.createDigits()}
                    <button  onClick={() => operate('+')} className="btn0">0</button>
                    <button></button>
                    <button onClick={() => operate('.')}>.</button>
                </div>

                <div className="symbol">
                    <button onClick={() => operation('+')}>+</button>
                    <button onClick={() => operation('*')}>*</button>
                    <button onClick={() => operation('-')}>-</button>
                    <button onClick={() => operation('+')}>+</button>
                    <button onClick={() => operation('=')}>=</button>
                </div>
            </div>
        </div>
      </div>)
    };
}

export default App;
