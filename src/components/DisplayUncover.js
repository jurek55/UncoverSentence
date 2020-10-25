import React from 'react';

    const DisplayUncover = (props) => {
    console.log(props);
    
    return ( 
        
        <React.Fragment>
            {props.data.uncovering}
            {props.data.number !== '' && <div className='category'>{`kategoria: ${props.data.tab[props.data.number].category}`}</div>}
        </React.Fragment>
     );
}
 
export default DisplayUncover;