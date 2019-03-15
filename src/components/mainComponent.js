import React, {Component} from 'react';
import RenderDetails from './renderDetails'

 class Main extends Component{
     constructor(props){
         super(props);
         this.state={
            input: ''
         }
         this.handleChange = this.handleChange.bind(this);
     }

     componentWillMount(){
        fetch('')
        .then(res=> res.json);
        
     }

     handleChange(event){
         this.setState({
             input: event.target.value
         })
     }

     showRender(){
        
             return <RenderDetails />
         
     }

    render(){
        const {input} = this.state
        return(
        <div>
            <p>Enter the Twitter Handle </p>
            <input type="text" value={this.state.input} onChange={this.handleChange} />
            <button type="submit" onClick={this.handleClick}>Submit</button>
            <h1>{input}</h1>
        </div>);
    }
}

class renderState extends Component{
    render(){
        return(<div></div>);
    }
}

export default Main;