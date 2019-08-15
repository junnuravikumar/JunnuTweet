import React from 'react';
// import Maketext from './maketext';
import './displaytext.css';
import Button from '@material-ui/core/Button';

class Displaytext extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tweet:'',
            tweetArray:[]
        };
    }
    dataGet = ()=>{
        this.setState({tweet:this.props.myParentTestData})
        this.state.tweetArray.push(this.props.myParentTestData)
    }
    render(props){
        console.log("inParentRender", this.state.tweetArray)
        console.log("iAmInDisplay:",this.props.myParentTestData)
        return(
            <div>
            <Button 
                variant= "contained" 
                color="primary" 
                className="MuiButton-root-positon"
                onClick={this.dataGet}
            >
                Tweet
            </Button>
            
            <div>
                <ul className="tweet-block">
                    { this.state.tweetArray.map((tweets)=>{
                        return <li>{tweets}</li>
                    }) }
                </ul>
            </div>
            </div>
        );
    }
}
export default Displaytext;