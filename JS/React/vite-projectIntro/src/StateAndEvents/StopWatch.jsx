import { useEffect, useState } from "react";

function StopWatch() {
    const [isStopped, setIsStopped] = useState(true);
    const [k, setK] = useState(0);

    useEffect(() => {
       if(isStopped === false) {
        setK( k + 1);
       } 
    }, [isStopped]);

    return(
        <div>
            <div>
                <button onClick={() => setIsStopped(false)}>Start</button>
                <button onClick={() => setIsStopped(true)}>Stop</button>
            </div>
            <div>Start clicked how many times {k}</div>
            <ShowTimer isStopped={isStopped} k={k} />
        </div>
    );
}

function ShowTimer({ isStoppes, k}) {
    if(isStopped) {
        return null;
    }
    return <Timer k={k} />
}

function Timer({ k }) {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('for k is', k, 'time is', time);
            setTime((c) => c + 1);
        }, 1000);
        return () => clearInterval(interval)
    }, []);

    return (
        <div>
            <b>{time}</b>
        </div>
    );
}

export default StopWatch;