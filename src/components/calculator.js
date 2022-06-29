import React from "react"
class App extends React.Component {
    constructor(props) {
        super(props);
     
    }
    
         createDigits = () => {
        const digits = [];

        for (let i = 9; i > 0; i--) {
            digits.push(
                <button key={i}>{i}</button>
            )
        }
        return digits;
    }
    
    render() {
        return (<div className="App">
        <div className="calculator">
            <div className="display">
                <span>0</span>
            </div>

            <div className="operators">
                <div className="digits">
                    <button>AC</button>
                    <button>+/-</button>
                    <button>%</button>
                   {this.createDigits()}
                    <button className="btn0">0</button>
                    <button></button>
                    <button>.</button>
                </div>

                <div className="symbol">
                    <button>+</button>
                    <button>*</button>
                    <button>-</button>
                    <button>+</button>
                    <button>=</button>
                </div>
            </div>
        </div>
      </div>)
    };
}

export default App;
