import { useState} from "react"
import calculate from "../logic/calculate"

function App() {
    
    const [total, setTotal] = useState(0);
    const [next, setNext] = useState(null);
    const [operation, setOperation] = useState(null);

    const calculatorHandler = (buttonName) => {
        const newObj = calculate({ total, next, operation }, buttonName);
        setTotal(newObj.total);
        setNext(newObj.next);
        setOperation(newObj.operation);
    }

        const createDigits = () => {
          const digits = [];
        
        for (let i = 9; i > 0; i--) {
            digits.push(
                <button onClick={() => calculatorHandler(i.toString())}key={i} value={i}>{i}
                </button>
            )
        }
        return digits;
        
    }
        return (
            
        <div className="App">
        <div className="calculator">
            <div className="display">
                {total}
                {operation}
                {next}
            </div>
          
            <div className="operators">
                <div className="digits">
                    <button onClick={() => calculatorHandler('AC')}>AC</button>
                    <button onClick={() => calculatorHandler('+/-')}>+/-</button>
                    <button onClick={() => calculatorHandler('%')}>%</button>
                   {createDigits()}
                    <button  onClick={() => calculatorHandler('0')} className="btn0">0</button>
                    <button></button>
                    <button onClick={() => calculatorHandler('.')}>.</button>
                </div>

                <div className="symbol">
                    <button onClick={() => calculatorHandler('+')}>+</button>
                    <button onClick={() => calculatorHandler('x')}>x</button>
                    <button onClick={() => calculatorHandler('-')}>-</button>
                    <button onClick={() => calculatorHandler('+')}>+</button>
                    <button onClick={() => calculatorHandler('=')}>=</button>
                </div>
            </div>
        </div>
      </div>)
    };

export default App;
