import {useState} from 'react';


function ColorsCircles () {
    const [colors, setColors] = useState([]);

    return (
        <div>
            <ColorForm  setColors={setColors} colors={colors} />
            <ColorList colors={colors} setColors={setColors} />
        </div>
    );
}

function ColorForm(props) {
    const { setColors, colors } = props;
    const [color, setColor] = useState('');
    //console.log('colorForm render', new Date());
    const onSubmit = () => {
        const clonedColors = structuredClone(colors);
        clonedColors.push(color);
        setColors(clonedColors);
    };

    return (
        <div>
            <label>Enter Color</label>
            <input value={color} onChange={(e) => setColor(e.target.value)} />
            <button onClick={onSubmit}>Save</button>
        </div>
    );
}

function ColorList(props) {
    const { colors, setColors } = props;
    //console.log('Colorlist render', new Date());

    const removeColor = (index) => {
        console.log('remove color', colors[index], 'index is', index);
        const newArray = [];

        for (let i = 0; i < colors.length; i++) {
            if (i === index) {
                continue;
            }
            newArray.push(colors[i]);
        }
        setColors(newArray);
    };

    return (
        <div style={{ marginTop: '30px'}}>
            {colors.map((color, index) => (
               <div
                 key={index}
                 style={{
                    margin: '10px',
                    width: '100%',
                    height: '30px',
                    backgroundColor: color,
                    color: 'white',
                    padding: '10px',
                 }}
                >
                    <span>{color}</span>
                    <button onClick={() => removeColor(index)}>Remove</button>

                </div>
            ))}



        </div>
    )

}


export default ColorsCircles;