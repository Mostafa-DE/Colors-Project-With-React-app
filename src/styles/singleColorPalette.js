import sizes from "./Sizes";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Palette: {
    height: "97vh",
    display: "flex",
    flexDirection: "column",
  },
  PaletteColors: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.6px",
    opacity: 1,
    backgroundColor: "rgba(7, 56, 40, 0.849)",
    "& a": {
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
      color: "white",
      textTransform: "uppercase",
      border: "none",
      cursor: "pointer",
      transition: "0.5s",
      textDecoration: "none",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.3333%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "9%",
    },
  },
};
