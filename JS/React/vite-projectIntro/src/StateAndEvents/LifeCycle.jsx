import { useEffect, useState} from 'react';

function LifeCycle() {
    const [n, setN] = useState(0);


    return (
        <div>
            <div>
                <button onClick={() => setN(n - 1)}>-</button>
                <b>{n}</b>
                <button onClick={() => setN(n + 1)}>+</button>
            </div>
            <EvenOrOdd n={n} />
        </div>
    );
}

function EvenOrOdd (props) {
    const { n } = props;

    if (n % 2 === 0) {
        return <EvenComponent />
    }
    return <OddComponent />

}

function EvenComponent() {
    useEffect(() => {
        console.log("even component rendered");
    }, []);
    return (
        <div>
            <h1>Even</h1>
        </div>
    );
}

function OddComponent() {
    useEffect(() => {
        return() => {
            console.log("odd component died")
        }
    }, [])
    return (
        <div>
            <h1>Odd</h1>
        </div>
    );
}

export default LifeCycle;