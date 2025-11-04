import React from 'react';
import './Box.css';
function Box(){
    return(
        <div>
            <h1>This is Box Component</h1>
            <div className='Card'>
                <h1>Styled Box</h1>
                <p>This box is styled using external CSS file.</p>
                <button>Click Me</button>
            </div>
        </div>
    );
}
export default Box;