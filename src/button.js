import React from 'react';
import './App.css'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.myClick = this.myClick.bind(this);
    }

    randomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    myClick() {
        document.getElementsByClassName('wrapper')[0].style.backgroundColor = this.randomColor();
    }

    render() {
        return (
            <button onClick={this.myClick} className="clicker">Change disign</button>
        )
    }
}

export default Button;