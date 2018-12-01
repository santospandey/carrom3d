import React, { Component } from 'react';
import './board.css';

class Board extends Component{

    componentDidMount(){
        let canvas = document.getElementById('canvas');
        canvas.width = window.innerWidth/2;
        canvas.height = window.innerHeight/2;        
    }

    render(){
        return(
            <div className="boardContainer">
                <canvas id="canvas"></canvas>
            </div>
        )
    }
}

export default Board;