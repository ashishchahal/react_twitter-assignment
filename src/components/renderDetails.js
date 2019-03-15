import React, {Component} from 'react';

class RenderDetails extends Component{
    render(){
        return(
        <div>
            <div>Number of Tweets in the last 1 week = </div>
            <div>Number of hash tags in the last 1 week =  </div>
            <div>Number of followers gained in the last 1 week =  </div>
        </div>);
    }
}

export default RenderDetails;