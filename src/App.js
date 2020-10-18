import React from 'react';
import Keyboard from './components/Keyboard';
import HideSentence from './components/HideSentence';
import './App.css';

class Szubienica extends React.Component {
  state = { 
    litera: '',
    sentence: 'świnka pepa'
   }
   AddLetter=(znak)=>{
     const word =this.state.litera + znak;
    this.setState({
      litera: word
    })
  }
  render() { 
    
    return ( 
      <React.Fragment>
        <div className="wraper">
          <Keyboard add={this.AddLetter}/>
          <div className='sentence'><HideSentence sentence={this.state.sentence}/></div>
          <div className='showletter'>{this.state.litera}</div>
        </div>
      </React.Fragment>
     );
  }
}
 
export default Szubienica;
 
