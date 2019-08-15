import React from 'react';
import Button from '@material-ui/core/Button';
import Maketext from './maketext';



class Tweet extends React.Component{
   constructor(props){
       super(props);
         this.state={
             clicked : false,
         }
   //     this.handleChange=this.handleChange(bind);
   }

   handleChange(){
       this.setState({
           clicked:this.state.clicked,
        });
        console.log(this.state.clicked);
   }
   
    render(){
        return(
            <div>
                <Button variant= "contained" color="primary" className="MuiButton-root-positon">Tweet</Button>
            </div>
        );
    }
}
export default Tweet;