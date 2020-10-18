import React from 'react';

const HideSentence = ({sentence}) => {
    const lengthSentence = sentence.length;
    console.log(sentence);
    const sentenceCapsLock=sentence.toUpperCase();
    console.log(sentenceCapsLock);
    let hiddenSentence = '';

    for (let i=0; i<lengthSentence; i++){
        if (sentenceCapsLock[i]!==' ')
            hiddenSentence=hiddenSentence +'-';
        else 
            hiddenSentence=hiddenSentence +' ';
    }

    return (
        <React.Fragment>
            {hiddenSentence}
        </React.Fragment>
     );
}
export default HideSentence;