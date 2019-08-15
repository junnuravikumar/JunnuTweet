import React from 'react';
import Maketext from './maketext';
import './App.css';
import Displaytext from './displaytext';


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      textData:'',
      
    }
  }

  iWantTextDataFromMyChild = (textData)=>{
    console.log("inParent", textData)
    this.setState({textData:textData})
  }
  
render(){
  return (
    <div className="App">
     <div className="input">
       <Maketext iWantTextDataFromMyChild={this.iWantTextDataFromMyChild}/> 
     </div>
   
     <div className='output-text'>
       <Displaytext myParentTestData={this.state.textData}/>
     </div>

     </div>
  )
}
}

export default App;
