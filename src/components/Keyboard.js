import React from 'react';

const Keyboard = (props) => {
    const nr = props.data.number;
    console.log(nr);
    const letters =['a', 'ą', 'b', 'c', 'ć', 'd','e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p' ,'q', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ź', 'ż', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const Letters = letters.map((element)=>{ return element.toUpperCase()});
    let newTekst = props.data.uncovering;
    const handleOnClick=(event)=>{
    for (let i=0; i<props.data.tab[nr].sentence.length; i++){
        
        if (props.data.tab[nr].sentence[i] === event.target.innerHTML){
            newTekst = newTekst.substring(0,i) + event.target.innerHTML + newTekst.substring(i+1,props.data.tab[nr].sentence.length);
            };
        };
        props.uncover(newTekst);
        props.add(event.target.innerHTML);
    };
    
    const SubtractLetter = () =>{
        props.subtract()
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
                <div className='keys'>{keyboard}</div>
                <div className='backspace' onClick={SubtractLetter}>Backspace</div>
            </div>
        </React.Fragment>
     );
}
 
export default Keyboard;