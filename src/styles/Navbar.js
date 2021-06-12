export default {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "8vh",
        backgroundColor: "rgba(14, 248, 248, 0.034)"
    },
    logo: {
        marginRight: "20px",
        padding: "5px 13px",
        fontSize: "22px",
        fontFamily: "Roboto",
        fontWeight: 600,
        backgroundColor: "rgba(146, 146, 146, 0.137)",
        borderRadius: "5px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& .link-home": {
            textDecoration: "none",
            color: "rgb(65, 65, 65)"
        },
    },
    slider: {
        width: "340px",
        margin: "0 20px",
        display: "inline-block",
        "& .rc-slider-track": {
            backgroundColor: "transparent"
        },
        "& .rc-slider-rail": {
            height: "8px"
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginLeft: "-7px",
            marginTop: "-3px"
        }
    },
    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem"
    }
    
};