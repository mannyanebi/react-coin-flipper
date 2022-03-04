import React, {Component} from 'react';
import Coin from './Coin';
import {choice} from './helpers';
import './Flipper.css'

class Flipper extends Component{
    static defaultProps = {
        coins: [{face:"head", imgSrc:"https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"},
        {face:"tail", imgSrc:"http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=6d76c024ceb242939ece3ce823aaf8cb49d2de10-1589554354-0-AaWfdPRFk2TvRukdbNljYtsekXM6ey9jpkrngu4sZlWovJbArY2Mcgxap0oLtN6vWlUCVEwdtNPP7Tg5k6n000ktk2m6dGf1B_byZYSVQo1DxOa3dOlCr_aDNAu-WuZ8su9dHLLMRu0xjlFnBZORsARhpn1XrrD1QaNFjApcTfdm81q4L8WFjf6h-T9opt47HvBV67Ui3ORoIgq1mwO3YvvEGPuLVxTXd4QnCZRACG-M0JcGMmhTe_vGAGZjSywMGYygp8ikHLxIPxufG5lJ0v6VvEkZJk3F6nyPjEb36nSBwekYg3aL7cGpGxz3GabB3g"}]
    }
    constructor(props){
        super(props);
        this.state = {
            nFlips: 0,
            nHeads: 0,
            nTails: 0,
            currFace: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCounter(){
        let newCoin = choice(this.props.coins);
        this.setState(curState => ({
            currFace: newCoin,
            nFlips: curState.nFlips + 1,
            nHeads: newCoin.face === 'head' ? curState.nHeads + 1 : curState.nHeads,
            nTails: newCoin.face === 'tail' ? curState.nTails + 1 : curState.nTails
        }));
    }

    handleClick(){
        this.flipCounter();
    }

    render(){
        return(
            <section className='Flipper-container'>
                <h1>Let's flip a coin!</h1>
                {this.state.currFace && (<Coin face={this.state.currFace.face} imgSrc={this.state.currFace.imgSrc}/>)}
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails</p>
            </section>
        )
    }
};

export default Flipper;