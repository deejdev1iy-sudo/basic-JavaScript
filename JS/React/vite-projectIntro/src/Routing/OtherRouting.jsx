import NavigationBar from "./Navigation";
import NavigationBar2 from "./NavigationBar2";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";


function OtherRouting () {
    const [count, setCountDown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown((c) => c - 1)
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, []);

    useEffect(() => {
        if (count <= 0) {
            navigate(-1);
        }
    }, [count]);


    return (
        <div>
            <NavigationBar />
            <NavigationBar2 />
            <h1>The learning curve</h1>
            <h4>For few {count}</h4>
        </div>
    );
}

export default OtherRouting;