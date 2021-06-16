import chroma from 'chroma-js';
import sizes from './Sizes';
export default {
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
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: props =>props.showingFullPalette ? "20%" : "33.3333%",
        },
        [sizes.down("md")]: {
            width: "50%",
            height: props =>props.showingFullPalette ? "10%" : "20%",
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: props =>props.showingFullPalette ? "5%" : "10%",
        }
    },
    pCopyMessage: {
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black",
        fontSize: "1.8rem",
        fontWeight: 300
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
        fontWeight: 600,
        " & span": {
            color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black"
        }
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
        transitionDelay: "0.2s",
        " & h1": {
            fontWeight: 400,
            textShadow: "1px 2px black",
            background: "rgba(255, 255, 255, 0.2)",
            width: "100%",
            textAlign: "center",
            marginTop: "10rem",
            padding: "1rem",
            textTransform: "uppercase",
            [sizes.down("xs")]: {
                fontSize: "5rem"
            },
        },
    },

    

    
}