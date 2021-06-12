import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MiniPalette';

function MiniPalette(props) {
    const { classes, paletteName, emoji, colors } = props;
    const miniColorBoxes = colors.map(c => (
        <div className={classes.miniColor} style={{backgroundColor: c.color}} key={c.name} />
    ))
    return( 
        <div className={classes.root} onClick={props.goToPalette}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default withStyles(styles) (MiniPalette);