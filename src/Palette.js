import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map( color => (
            < ColorBox key={color.name} background={color.color} name={color.name} />
        ))
        return (
            <div className="Palette">
            {/* Navbar should be here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                    {/* footer in the end */}
            </div>
        )
    }
}

export default Palette;
