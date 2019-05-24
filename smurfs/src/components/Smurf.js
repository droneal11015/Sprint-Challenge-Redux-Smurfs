import React from 'react';

const Smurf = props => {
    return(
        <div className='smurf'>
            <h2>{props.smurf.name}</h2>
            <p>{props.smurf.age} smurf years old</p>
            <p>{props.smurf.height} cm tall</p>
        </div>
    )
}

export default Smurf;