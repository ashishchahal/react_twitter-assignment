import React, {Component} from 'react';
import RenderDetails from './renderDetails'

 class Main extends Component{
     constructor(props){
         super(props);
         this.state={
            input: '',
            submit: ''
         }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
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

     handleSubmit(event){
         this.setState({
            submit: this.state.input
         })
     }

    render(){
        return(
        <div>
            <p>Enter the Twitter Handle </p>
            <form onSubmit={this.handleSubmit} >
                <input type="text" value={this.state.input} onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
            <h1>{this.state.submit}</h1>
        </div>);
    }
}

class renderState extends Component{
    render(){
        return(<div></div>);
    }
}

export default Main;