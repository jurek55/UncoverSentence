import React from 'react';
const Keyboard = (props) => {
    const letters =['a', 'ą', 'b', 'c', 'ć', 'd','e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p' ,'q', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ź', 'ż', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const Letters = letters.map((element)=>{ return element.toUpperCase()});
    const handleOnClick=(event)=>{
        props.add(event.target.innerHTML)
        };
    const SubtractLetter = () =>{
        
    }
    const keyboard = Letters.map((element, index) => {const parameter=(index+1)%5; 
        return (
            <React.Fragment key={index}>
                    {index <35 && <div className='letter' onClick={handleOnClick}>{element}</div>}
                    {index >=35 && <div className='number' onClick={handleOnClick}>{element}</div>}
                    {parameter === 0 && <div className='break'></div>}
            </React.Fragment>
            )
        }
    );
        
    return ( 
        <React.Fragment>
            <div className='keyboard'>
                <div className='keys'>{keyboard}
                <button onClick={SubtractLetter}>Backspace</button>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Keyboard;