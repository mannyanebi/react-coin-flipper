import React, {Component} from 'react';

class Coin extends Component{
    render(){
            // {console.log(this.props)}
        return(
            <img src={this.props.imgSrc} alt={this.props.face} />
        )
    }
};

export default Coin;
