function ParentOne() {

    const str = "Hello world";
    const amount = 1000;
    const isOk = true;
    const notSet = null;
     
    const car = {
        model: 'Range rover',
        manufacturer: 'somecompany',
        engine: {
            cc: 3000,
        },
    };

    const colors = ['white', 'orangered', 'blue'];

    return(
        <div>
            <h1>I'm a parent component</h1>
            <Child str={str} amountNumber={amount} isOk={isOk} notSet={notSet}/>
            <Child1 str={str} amountNumber={amount} isOk={isOk} notSet={notSet} />
            <Child2 
              str={str} 
              amountNumber={amount} 
              isOk={isOk} 
              notSet={notSet} 
              car={car}
              colors={colors}
              
            />
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

function Child1(props) {
    
    const {str, amountNumber, isOk, notSet} = props;
    return(
        <div>
            <h1>Im the child1 component</h1>
            <ul>
                <li>
                    Some string <b>{str}</b>
                </li>
                <li>
                    Amount <b>{amountNumber}</b>
                </li>
                <li>
                    isOk <b>{String(isOk)}</b>{' '}
                </li>
                <li>
                    not set <b>{notSet}</b>
                </li>
            </ul>
        </div>
    );
}


function Child2({ str, amountNumber, isOk, notSet, car, colors }){
    return(
        <div>
            <h1>Im the child 2 component</h1>
            <ul>
                <li>
                    Some string <b>{str}</b>
                </li>
                <li>
                    Amount <b>{amountNumber}</b>
                </li>
                <li>
                    isok <b>{String(isOk)} </b>{' '}
                </li>
                <li>
                    not set<b>{notSet} </b>
                </li>
                <li>
                    car<b> {car.model} </b>
                </li>
                <li>
                    colors<b> {colors.join(', ')} </b>
                </li>
            </ul>
        </div>
    );
}

export default ParentOne;