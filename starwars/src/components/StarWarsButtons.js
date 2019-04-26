import React from 'react';

const StarWarsButtons = props => {
    return(
        <div className="page-buttons">
            <button onClick={props.prev}>Previous</button>
            <button onClick={props.next}>Next</button>
        </div>
    )
}

export default StarWarsButtons;