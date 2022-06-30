import React from "react"
import calculate from "../logic/calculate"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: null,
            next: null,
            operation: null,
          };
          this.state = {val :""}
     }
     handleClick = (buttonName) => {
       // this.setState((state) => calculate(state, e.target.innerText));
       const calculation = calculate({total:this.state.total, next:this.state.next, operation:this.state.operation}, buttonName);
       this.setState({
        total: calculation.total,
        next: calculation.next,
        operation: calculation.operation

       })
      };
      

         createDigits = () => {
        const digits = [];

        for (let i = 9; i > 0; i--) {
            digits.push(
                <button onClick={(e) => this.handleClick(e.target.value) } key={i} value={i}>{i}</button>
            )
        }
        return digits;
        
    }
    
    render() {
    
        return (
        
        <div className="App">
        <div className="calculator">
            <div className="display">
             <span>{this.state.total || this.state.next }</span>
            </div>
          
            <div className="operators">
                <div className="digits">
                    <button onClick={(e) => this.handleClick(e.target.innerHtml)}>AC</button>
                    <button onClick={(e) => this.handleClick(e.target.innerHtml)}>+/-</button>
                    <button onClick={(e) => this.handleClick(e.target.innerHtml)}>%</button>
                   {this.createDigits()}
                    <button  onClick={(e) => this.handleClick(e.target.innerHtml)} className="btn0">0</button>
                    <button></button>
                    <button onClick={(e) => this.handleClick(e.target.innerHtml)}>.</button>
                </div>

                <div className="symbol">
                    <button onClick={(e) => this.handleClick(e.target.innerHtml)}>+</button>
                    <button onClick={(e) => this.handleClick(e.target.innerHtml)}>*</button>
                    <button onClick={(e) => this.handleClick(e.target.innerHtml)}>-</button>
                    <button onClick={(e) => this.handleClick(e.target.innerHtml)}>+</button>
                    <button onClick={(e) => this.handleClick(e.target.innerHtml)}>=</button>
                </div>
            </div>
        </div>
      </div>)
    };
}

export default App;
