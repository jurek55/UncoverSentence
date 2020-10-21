import React from 'react';
import Keyboard from './components/Keyboard';

import DisplayUncover from './components/DisplayUncover';

import './App.css';

class UncoverSentence extends React.Component {
  constructor(props){
  super(props);
  this.state = { 
    litera: '',
    tab: [{sentence: 'świnka pepa', cover: ''},
          {sentence: 'psi patrol', cover: ''},
          {sentence: 'o dwóch takich co ukradli księżyc', cover: ''}],
    uncovering: ''
    };
};
 
  componentDidMount = () => {
    let tabCopy = this.state.tab;
    for (let j=0; j<tabCopy.length; j++){
      let hidden = '';
      for (let i=0; i<tabCopy[j].sentence.length; i++)
        if (tabCopy[j].sentence[i] !== ' ')
          hidden = hidden + '-';
        else
          hidden = hidden + ' ';
      tabCopy[j].cover = hidden;
      tabCopy[j].sentence=tabCopy[j].sentence.toUpperCase();
    };
    this.setState({
      tab: tabCopy,
      uncovering: tabCopy[0].cover
    })
  };
  setUncoveringSentence = (param) => {
      this.setState({
        uncovering: param
      })
  };
  AddLetter = (znak) => {
      this.setState({
        litera: znak
      })
  }
  SubtractLetter = ()=> {
    const lengthLitera = this.state.litera.length-1;
    const word = this.state.litera.slice(0,lengthLitera);
    this.setState({
      litera: word
    })
  }
  
  render() { 
    
    return ( 
      <React.Fragment>
        <div className="wraper">
          {/* <button onClick={this.CoverSentence}>losuj</button> */}
          <Keyboard add={this.AddLetter} subtract={this.SubtractLetter} data={this.state} uncover={this.setUncoveringSentence}/>
          <div className='showletter'>{this.state.litera}</div>
          <div className='hiden-sentence'><DisplayUncover data={this.state}/></div>
        </div>
      </React.Fragment>
     );
  }
}
 
export default UncoverSentence;
 
