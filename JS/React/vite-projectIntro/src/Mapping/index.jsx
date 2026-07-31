function Mapping() {

    const colors1 = ['indigo', 'violet', 'blueviolet', 'green'];
    function singleColor(c, i) {
        if (i === 1){
            return null;
        }
        return(
            <div key={i}>
                for index <b>{i}</b> color is <b>{c}</b>
            </div>
        );
    }

    return(
        <div>
            <h1>Mapping colors</h1>
            <h4>using arrow functions</h4>
            {colors1.map((color, index) => {
                return (
                    <div key={index}>
                        for index <b>{index}</b> color is <b>{color}</b>
                    </div>
                );
            })}
            <h4>Using direct arrow functions</h4>
            {colors1.map((c, indexOne) => (
              <div key={indexOne}>
                for index <b>{indexOne}</b> color is<b>{c}</b>
              </div>
            ))}
            <h4>using anonymous function</h4>
            {colors1.map(function(c, indexTwo) {
                return(
                    <div key={indexTwo}>
                        for index <b>{i}</b> color is <b>{c}</b>
                    </div>
                );
            })}
            <h4>using referencing the function</h4>
            {colors1.map(singleColor)}

            <h4>Using a component</h4>
            {colors1.map(function (c, i) {
                return <SingleColorComponent  c={c} i={i} key={i} />;
            })}
        </div>
    );
}

function SingleColorComponent(props) {
    const {c, i} = props;

    return (
        <div>
            for index <b>{i}</b> color is <b>{c}</b>
        </div>
    );
}

export default Mapping;