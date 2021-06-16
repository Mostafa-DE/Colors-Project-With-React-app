import React, { Component } from 'react'
import { Picker }  from 'emoji-mart';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SaveIcon from '@material-ui/icons/Save';
import 'emoji-mart/css/emoji-mart.css'



 class PaletteMetaForm extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            dialog: "paletteName",
            newPaletteName: ""
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeDialogForm = this.changeDialogForm.bind(this);
        this.saveNewPalette = this.saveNewPalette.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => 
        this.props.Palettes.every(
          ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
        ) 
      );
    }

    handleClickOpen() {
        this.setState({open: true});
    };
    
    handleClose(value) {
        this.setState({open: false});
        this.props.hideForm(value);

    };

    handleChange(evnt) {
        this.setState({ [evnt.target.name]: evnt.target.value});
    };

    changeDialogForm() {
        this.setState({dialog: "emoji"})
    }

    saveNewPalette(emoji) {
        const newPalette = {
            paletteName: this.state.newPaletteName,
            emoji: emoji.native
        };
        this.props.savePalette(newPalette);
        this.setState({dialog: ""})

    }
      
    render() {
        const { dialog, newPaletteName } = this.state;
        const { classes, hideForm } = this.props;
        return (
        <div>
            <Dialog open={dialog === "emoji"} onClose={hideForm}>
            <DialogTitle id="form-dialog-title">Please pick a palette emoji ^_^ </DialogTitle>
                <Picker onSelect={this.saveNewPalette}/>
            </Dialog>
            <Dialog 
                open={dialog === "paletteName"} 
                onClose={this.handleClose} 
                aria-labelledby="form-dialog-title"    
            >
              <DialogTitle id="form-dialog-title">Write A Palette Name ;)</DialogTitle>

              <ValidatorForm onSubmit={ this.changeDialogForm}>
              <DialogContent>
                <DialogContentText>
                  Please enter a name for your new Palette, and make sure it's unique!!
                </DialogContentText>
                
            
            <TextValidator 
              label="Palette Name" 
              value={newPaletteName}
              name="newPaletteName"
              onChange={this.handleChange}
              fullWidth
              margin="normal"
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Enter A Palette Name !!', 'Palette Name Must Be Unique']}
            />

            
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Save Palette      
                </Button>
              </DialogActions>
            </ValidatorForm>
            </Dialog>
        </div>
        );
        
    }
}

export default PaletteMetaForm;
