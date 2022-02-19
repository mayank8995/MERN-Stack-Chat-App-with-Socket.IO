import React, { useState } from 'react';

const MyComponent = (props) =>{

    const [state, setState]  = useState(false);
    console.log("state>>>",state)
    return <div>
        <button onClick={()=>setState(!state)}>Toggle</button>
        <p>This is some text</p>
    </div>

}
export default MyComponent;