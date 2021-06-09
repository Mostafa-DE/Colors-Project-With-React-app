import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class singleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = {format: 'hex'}
        this._shades = this.gatherShades(this.props.Palette, this.props.colorId);
        this.changeFormat = this.changeFormat.bind(this);
    }

    gatherShades(Palette, colorToFilterBy) {
        let shades = [];
        let allColors = Palette.colors;
        for(let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            ) ;
        }
        return shades.slice(1);
    }

    changeFormat(value) {
        this.setState({format: value})
    }

    render() {
        const {paletteName, emoji, id} = this.props.Palette;

        const { format } = this.state;
        const colorBoxes = this._shades.map( color => (
            <ColorBox 
                key={color.name} 
                name={color.name} 
                background={color[format]} 
                showingFullPalette={false} />
        ))
        return (
            <div className="SingleColorPalette Palette">
                <Navbar handleChange={this.changeFormat} showSnackbar={false} />
                <div className="Palette-colors">
                    {colorBoxes}
                    {/* <div className="go-back ColorBox">
                        <Link to={`/palette/${id}`} className="back-btn">Go Back</Link>
                    </div> */}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default singleColorPalette;
