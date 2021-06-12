export default {
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
        color: "white",
        alignItems: "center",
        fontFamily: "cursive",
        "& a": {
            color: "white",
            textDecoration: "none",
            fontSize: "1.1rem",
            backgroundColor: "#7ac4d5",
            border: "1px solid #7ac4d5",
            borderRadius: "8px",
            textAlign: "center",
            padding: "0.5rem 1rem",
        },
        "&:hover a": {
            backgroundColor: "white",
            color: "black",
            transition: "0.7s",
            boxShadow: "3px 3px 2px 1px rgba(0, 0, 0, 0.2);"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    }
};