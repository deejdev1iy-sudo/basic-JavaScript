import {useState} from 'react';

function  InfoSection(props) {
    const { people } = props
    const count = Array.isArray(people) ? people.length : 0

    return(
        <div style={{ padding: '20px', display: 'flex', alignItems: 'center'}}>
            <b style={{ fontSize: '28px'}}>{count}</b>
            <span style={{ fontSize: '14px', marginLeft: '10px'}}>User results</span>
        </div>
    );
}

export default InfoSection;