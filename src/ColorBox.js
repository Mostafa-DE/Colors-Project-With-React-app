import React, { Component } from 'react';
import { CopyToClipboard }  from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import styles from './styles/ColorBox';
import { withStyles } from '@material-ui/styles';

class ColorBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copied: false
        }
        this.changeCopystate = this.changeCopystate.bind(this)
    }

    changeCopystate() {
        this.setState({copied: true} , () => {
           setTimeout( () => this.setState({copied:false}), 1500)
        })
    }
    render() {
        const { name, background, moreUrl, showingFullPalette, classes } = this.props
        const { copied } = this.state

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopystate}>
            <div style={{background: background}} className={classes.ColorBox}>
                <div 
                    style={{background: background}} 
                    className={` ${classes.copyOverlay} ${copied && classes.showOverlay}`} 
                />
                <div className={`${copied === true ? classes.showCopyMessage : null } ${copied === true ? classes.copyMessage : classes.copyMessage}`}>
                    <h1>Copied!!</h1>
                    <p className={classes.pCopyMessage}>{this.props.background}</p>
                </div>
                <div>
                    <div className={classes.boxContent}>
                        <span>{name}</span>
                    </div>
                        <button className={classes.copyButton}>Copy!!</button> 
                </div>
                {showingFullPalette === true ? (
                <Link to={moreUrl} onClick={evnt => evnt.stopPropagation()}>
                    <span className={classes.seeMore}>more</span>
                </Link>
                ) : null}
            </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles) (ColorBox)