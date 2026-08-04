import {useState} from 'react';

function ClickMe() {
    const[n, setN] = useState(0);
    const increment = () => {
        const newN = n + 1;
        setN(newN);
    };

    const decrement = () => {
        setN(n - 1);
    };

    const spoil = () => {
        setN('cats and dogs')
    };

    const reset = () => {
        setN(0)
    };

    return (
        <div>
            <h4>Clicked {n}</h4>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={spoil}>Spoil</button>
                <button onClick={reset}>Reset</button>
            </div>
            <h4>Clicked {n}</h4>
        </div>
    );
}

export default ClickMe