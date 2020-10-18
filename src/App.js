import React from 'react';
import Keyboard from './components/Keyboard';
import HideSentence from './components/HideSentence';
import './App.css';

class Szubienica extends React.Component {
  state = { 
    litera: '',
    sentence: 'klub pickwika'
   }
   ChangeLitera=(znak)=>{
    this.setState({
      litera: znak
    })
  }
  render() { 
    
    return ( 
      <React.Fragment>
        <Keyboard change={this.ChangeLitera}/>
        <div className='showletter'>{this.state.litera}</div>
        <div className='sentence'><HideSentence sentence={this.state.sentence}/></div>
      </React.Fragment>
     );
  }
}
 
export default Szubienica;
 
