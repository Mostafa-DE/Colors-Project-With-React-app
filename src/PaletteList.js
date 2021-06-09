import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from './MiniPalette';
// import Palette from './Palette';

const styles = {
    root: {
        background: "linear-gradient(135deg,rgb(0, 132, 255) 0%,rgb(0, 132, 255) 50%,rgb(221, 9, 80) 50%,rgb(209, 14, 79) 100%)",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    }
}

class PaletteList extends Component {
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }

    render() {
        const { Palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1> React Colors Demo!!</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {Palettes.map(p => (
                            <MiniPalette key={p.id} {...p} goToPalette={ () => this.goToPalette(p.id)} />
                    
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles) (PaletteList);
