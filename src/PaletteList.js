import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteList';
import { Link } from 'react-router-dom';

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
                        <Link to="/palette/new">Create New Palette 😎 </Link>
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
