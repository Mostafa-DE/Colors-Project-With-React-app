import React, { Component } from 'react'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/Navbar';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            snackbarOpen: false
        };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleFormatChange(evnt) {
        this.setState({format: evnt.target.value , snackbarOpen: true});
        this.props.handleChange(evnt.target.value);
    }

    closeSnackbar() {
        this.setState({snackbarOpen: false});
    }

    render() {
        const { level , changeLevel, showSnackbar, classes } = this.props;
        const { format , snackbarOpen } = this.state;
        return (
            <nav className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link className="link-home" to="/">Color Picker !!</Link>
                </div>
                {showSnackbar && (
                <div>
                    <span className={classes.spanLevel}>Level: {level}</span>
                    <div className={classes.slider}>
                        <Slider 
                            defaultValue={level} 
                            min={100} 
                            max={900} 
                            step={100} 
                            onAfterChange={changeLevel} 
                        />
                    </div>
                </div>
                )}
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange} >
                        <MenuItem value="hex">
                         Hex - (#ffbe69)
                        </MenuItem>
                        <MenuItem value="rgb">
                         rgb - (255, 255, 255)
                        </MenuItem>
                        <MenuItem value="rgba">
                         rgba - (255, 255, 255, 0.1)
                        </MenuItem>
                    </Select>
                </div>
                
                <Snackbar 
                    anchorOrigin={{vertical: "top", horizontal: "center"}} 
                    open={snackbarOpen} 
                    autoHideDuration={4000}
                    onClose={this.closeSnackbar}
                    style={{marginLeft: '12rem', marginTop: '-1.1rem'}}

                >
                    <Alert 
                        style={{color: 'black' , fontWeight: 600}} 
                        severity="warning" 
                        action={[
                            <IconButton onClick={this.closeSnackbar} color='inherit' key='close' aria-label='close '>
                                <CloseIcon style={{fontSize: '12px'}}  />
                            </IconButton>
                        ]}
                    >
                        You Changed Color Format To {format.toUpperCase()}
                    </Alert>
                </Snackbar>
                  
            

            </nav>
        )
    }
}

export default withStyles(styles) (Navbar);
