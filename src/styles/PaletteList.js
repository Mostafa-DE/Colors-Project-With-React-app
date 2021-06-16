import sizes from "./Sizes";
export default {
    "@global": {
        ".fade-exit": {
           opacity: 1 
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-out"
        }
    },
    root: {
        // background: "linear-gradient(135deg,rgb(0, 132, 255) 0%,rgb(0, 132, 255) 50%,rgb(221, 9, 80) 50%,rgb(209, 14, 79) 100%)",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#26eedd",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='209' height='209' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%2320cabc' fill-opacity='0.47'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.47'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E")`
    
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width: "80%"
        },
          [sizes.down("xs")]: {
            width: "75%"
        }
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
            transition: "0.3s",
            boxShadow: "3px 3px 2px 1px rgba(0, 0, 0, 0.2);"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "1.4rem",
        [sizes.down("md")]: {
          gridTemplateColumns: "repeat(2, 50%)"
        },
        [sizes.down("xs")]: {
          gridTemplateColumns: "repeat(1, 100%)",
          gridGap: "1rem"
        }
    }
};



