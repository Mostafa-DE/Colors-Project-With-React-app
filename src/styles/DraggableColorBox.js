import sizes from './Sizes';
import chroma from 'chroma-js';
const styles = {
    root: {
        width: "20%",
        height:"25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.6px",
        [sizes.down("lg")]: {
            width: "25%",
            height: "20%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "10%"
        },
        [sizes.down("sm")]: {
        width: "100%",
        height: "6%"
        }

    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "rgba(0,0,0,0.6)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        fontFamily: "cursive",
        fontWeight: 600,
        display: "flex",
        justifyContent: "space-between",
        "& .DraggableColorName": {
            color: props => chroma(props.color).luminance() <= 0.08 ? "white" : "black",
        },
    
    },
    deleteIcon: {
        transition: "all 1s",
        "&:hover svg": {
            color: "white",
            transition: "all 0.3s ease-in-out",
            transform: "scale(1.4)"
        }

    }
};

export default styles;