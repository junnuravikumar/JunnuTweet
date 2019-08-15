import React from 'react';

class Maketext extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
                      text:'',
                    };
      }

      handleChange =(event) => {
        // var p = new Promise((resolve) => { 
        //   resolve (this.setState({text:event.target.value}))
        // });
        // p.then((res)=>console.log("firstIn",this.state.text))
        this.setState({text:event.target.value})
        setTimeout(() => {
          this.props.iWantTextDataFromMyChild(this.state.text)
        }, 0);
       
      }

    render(){
      console.log("second",this.state.text);
        return(
            <div>
                 <input type='text' name='input' className='input-text' 
                 onChange={ this.handleChange } placeholder='what are you thinking'/>
            </div>
        );
    }
}
export default Maketext;