function Parent() {

    const str = "Hello world";
    const amount = 1000;
    const isOk = true;
    const notSet = null;


    return(
        <div>
            <h1>I'm a parent component</h1>
             <Child str={str} amountNumber={amount} isOk={isOk} notSet={notSet}/>
        </div>
    );
}

function Child(props) {
    console.log(props)

    return(
        <div>
            <h1>Im the child component</h1>
            <ul>
                <li>
                    Some string <b>{props.str}</b>
                </li>
                <li>
                    Amount <b>{props.amountNumber}</b>
                </li>
                <li>
                    isOk <b>{String(props.isOk)}</b>{" "}
                </li>
                <li>
                    notSet <b>{props.notSet}</b>
                </li>
            </ul>
        </div>
    );
}

export default Parent;