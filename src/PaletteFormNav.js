import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from './styles/PaletteFormNav';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Button from "@material-ui/core/Button";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



class PaletteFormNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          newPaletteName: "",
          formShowing: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }



    handleChange(evnt) {
        this.setState({ [evnt.target.name]: evnt.target.value});
    }

    showForm() {
      this.setState({formShowing: true})
    }

    hideForm() {
      this.setState({formShowing: false})
    }

    render() {
        const { classes , open, savePalette, handleDrawerOpen, Palettes } = this.props;
        const { formShowing } = this.state;
        return (
            <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          color= 'default'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              < AddToPhotosIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              New Palette Form
            </Typography>
           
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to="/">
              <Button 
                variant="outlined" 
                color="secondary" 
                className={classes.button} 
                startIcon={<ExitToAppIcon />}
              >
                Go Back
              </Button>
            </Link>
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={this.showForm}
              className={classes.button}
            >
                Save Palette
            </Button>
            </div>
        </AppBar>
        {formShowing && (
          <PaletteMetaForm 
            savePalette={savePalette} 
            classes={classes} 
            Palettes={Palettes} 
            hideForm={this.hideForm} 
          />
        )}
            </div>
        )
    }
}

export default withStyles(styles,{ withTheme:true })(PaletteFormNav);