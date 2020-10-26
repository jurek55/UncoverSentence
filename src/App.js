import React from 'react';
import Keyboard from './components/Keyboard';

import DisplayUncover from './components/DisplayUncover';

import './App.css';

class UncoverSentence extends React.Component {
  constructor(props){
  super(props);
  this.state = { 
    litera: '',
    tab: [{sentence: 'świnka pepa', cover: '', category: 'film dla dzieci', picture: 'pepa', task: 'tytuł filmu'},
          {sentence: 'psi patrol', cover: '', category: 'film dla dzieci', picture: 'psipatrol', task: 'tytuł filmu'},
          {sentence: 'o dwóch takich co ukradli księżyc', cover: '', category: 'tytuł filmu', picture: 'odwochtakich', task: 'tytuł filmu'},
          {sentence: '101 dalmatyńczyków', cover: '', category: 'tytuł filmu', picture: 'dalmatynczyki', task: 'tytuł filmu'},
          {sentence: 'trzej muszkieterowie', cover: '', category: 'tytuł książki', picture: 'muszkieterowie', task: 'tytuł filmu'},
          {sentence: 'władysław jagiełło', cover: '', category: 'król polski', picture: 'jagiello', task: 'imię i nazwisko postaci'},
          {sentence: 'gwiaździsta noc', cover: '', category: 'malarstwo - impresjonizm', picture: 'vangogh', task: 'tytuł obrazu'}],
    uncovering: '',
    number: '',
    olderItems: []
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
    const number = this.DrawSentence();
    this.setState({
      tab: tabCopy,
      number,
      uncovering: tabCopy[number].cover
    })
    
  };
  CoverSentence = () => {
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
  }
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
    let tab1 = [...this.state.uncovering];
    const uncoveringLength = tab1.length;
    for (let i=0; i<uncoveringLength; i++)
      if (tab1[i] === this.state.litera)
        tab1[i] = '-';
    const uncovering = tab1.join('');
    this.setState({
      litera: word,
      uncovering
    })
  }
  
  DrawSentence = () => {
   const olderItems = [...this.state.olderItems];
   const olderItemsLength = olderItems.length;

   let number = this.state.number;
    if (olderItems.length === 0){
      number = Math.ceil(Math.random()*this.state.tab.length);
      olderItems[0] = number-1;
      this.setState({
      olderItems
      })
      return number-1;
    } else {
      
      do {
        let flag = 0;
        var isSet = true;
        number = Math.ceil(Math.random()*this.state.tab.length);
        for (let i=0; i<olderItemsLength; i++){
          if (olderItems[i] === number-1){
            flag++; console.log(flag);
          }
        }
          if (olderItemsLength === this.state.tab.length)
            isSet = false;
          if (flag === 0){
              olderItems[olderItemsLength] = number-1;
              this.setState({
                olderItems,
                number: number-1
              })
              isSet = false;
              return number-1;
          };
          
      } while (isSet);
    };
  }
  render() { 
    console.log(this.state.olderItems);
    console.log(this.state.number);
    return ( 
      <React.Fragment>
        
        <div className="wraper">
          <div className='top-menu'>
              <div className="menu-button">ZASADY</div>
              <div className="menu-button">START</div>
              <div className="menu-button" onClick={this.DrawSentence}>LOSUJ NOWE</div>
              <div className="menu-button">PODPOWIEDŹ</div>
          </div>
          {this.state.number !=='' && <p className='header'>{`ODGADNIJ: ${this.state.tab[this.state.number].task}`}</p>}

          {/* <button onClick={this.CoverSentence}>losuj</button> */}
    {this.state.number !=='' && <div className='showletter' id={this.state.tab[this.state.number].picture}>{/* <div className='content'>{`Zasady: `}<br/>{`Odgadnij losowo wybrane hasło z podanej kategorii. Sukcesem jest odgadnięcie pełnego brzmienia hasła przy - co najwyżej - 10. błędnych kliknięciach. Jako błędne kliknięcie liczone jest także - pomyłkowe - kliknięcie już wybranej litery ponownie. Litery hasła wprowadzamy z klawiatury ekranowej.`}</div> */}</div>}
          <Keyboard add={this.AddLetter} subtract={this.SubtractLetter} data={this.state} uncover={this.setUncoveringSentence}/>
          <div className='hiden-sentence'><DisplayUncover data={this.state}/></div>
        </div>
      </React.Fragment>
     );
  }
}
 
export default UncoverSentence;
 
