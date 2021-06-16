import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/Palette';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: "hex"
        };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(newLevel) {
        this.setState({level: newLevel});
    }

    changeFormat(value) {
        this.setState({format: value})
    }

    render() {
        const { colors, paletteName, emoji, id } = this.props.Palette;
        const { classes } = this.props;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map( color => (
            < ColorBox 
                key={color.name} 
                background={color[format]} 
                name={color.name} 
                moreUrl={`/palette/${id}/${color.id}`}
                showingFullPalette={true} 
            />
        ))
        return (
            <div className={classes.Palette}>
                < Navbar 
                    level={level} 
                    changeLevel={this.changeLevel} 
                    handleChange={this.changeFormat}
                    showSnackbar={true} 
                />
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                </div>
                    <PaletteFooter  paletteName={paletteName} emoji={emoji}/>

            </div>
        )
    }
}

export default withStyles(styles) (Palette);
