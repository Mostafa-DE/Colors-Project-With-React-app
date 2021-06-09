import React, { Component } from 'react';
import './colorBox.css';
import { CopyToClipboard }  from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';


const styles = {
    ColorBox: {
        width: "20%",
        height: props =>props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.6px",
        "&:hover button": {
            opacity: 1
        }
    },
    pCopyMessage: {
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black",
        fontSize: "1.8rem",
        fontWeight: 300
    },
    nameOfColor: {
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black"
    },
    copyButton: {
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black",
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginTop: "-15px",
        marginLeft: "-50px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        fontWeight: "bold",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        cursor: "pointer",
        transition: "0.5s",
        opacity: 0
    },
    seeMore: {
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black",
        position: "absolute",
        right: "0px",
        bottom: "0px",
        background: "rgba(255, 255, 255, 0.3)",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        fontFamily: "cursive",
        textTransform: "uppercase"
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        fontFamily: "cursive",
        fontWeight: 600
    },
    copyOverlay: {
        opacity: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
        transform: "scale(0.1)",
    },
    showOverlay: {
        opacity: 1,
        transform: "scale(50)",
        zIndex: 10,
        position: "absolute"
    },
    copyMessage: {
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "3rem",
        transform: "scale(0.1)",
        opacity: 0,
        color: "white"
    },
    showCopyMessage: {
        opacity: 1,
        transform: "scale(1)",
        zIndex: 25,
        transition: "all 0.3s ease-in-out",
        transitionDelay: "0.2s"
    },
    h1CopyMessage: {
        fontWeight: 400,
        textShadow: "1px 2px black",
        background: "rgba(255, 255, 255, 0.2)",
        width: "100%",
        textAlign: "center",
        marginTop: "10rem",
        padding: "1rem",
        textTransform: "uppercase"
    },
    

    
}


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
        // const isDarkColor = chroma(background).luminance() <= 0.08

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopystate}>
            <div style={{background: background}} className={classes.ColorBox}>
                <div 
                    style={{background: background}} 
                    className={` ${classes.copyOverlay} ${copied && classes.showOverlay}`} 
                />
                <div className={`${copied === true ? classes.showCopyMessage : null } ${copied === true ? classes.copyMessage : classes.copyMessage}`}>
                    <h1 className={classes.h1CopyMessage}>Copied!!</h1>
                    <p className={classes.pCopyMessage}>{this.props.background}</p>
                </div>
                <div>
                    <div className={classes.boxContent}>
                        <span className={classes.nameOfColor}>{name}</span>
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