import React from 'react'
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import chroma from 'chroma-js';
import styles from './styles/DraggableColorBox';


const DraggableColorBox = SortableElement((props) => {
    const { classes, handleClick, color, name } = props;
    return (
        <div 
            className={classes.root} 
            style={{backgroundColor: color}}
        >
            <div className={classes.boxContent}>
                <span style={{color: chroma(color).luminance() <= 0.08 ? "white" : "black"}}>{name}</span>
                <span className={classes.deleteIcon} >< DeleteIcon onClick={handleClick} /></span> 
            </div>
            
        </div>
    )
})

export default withStyles(styles) (DraggableColorBox);
