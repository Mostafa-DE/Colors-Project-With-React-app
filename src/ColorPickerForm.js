import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/styles';
import chroma from 'chroma-js';
import styles from './styles/ColorPickerForm';




class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: "teal",
            newColorName: ""

        };
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', value => 
           this.props.colors.every(
               ({ name }) => name.toLowerCase() !== value.toLowerCase()
           )
        );
        ValidatorForm.addValidationRule('isColorUnique', value => 
            this.props.colors.every(
                ({ color }) => color !== this.state.currentColor
            ) 
        );


    };

    updateCurrentColor(newColor) {
        this.setState({currentColor: newColor.hex})
    }

    handleChange(evnt) {
        this.setState({ [evnt.target.name]: evnt.target.value});
    }

    handleSubmit() {
        const newColor = {
            color:  this.state.currentColor,
            name: this.state.newColorName
        };
        this.props.createNewColor(newColor);
        this.setState({newColorName: ""})
    }

    render() {
        const { PaletteIsFull, classes } = this.props;
        const { currentColor, newColorName } = this.state;
        return (
            <div className={classes.root}>
            <ChromePicker
            color={currentColor}
            onChangeComplete={this.updateCurrentColor}
            className={classes.picker}
          />
          <ValidatorForm onSubmit={this.handleSubmit}>
            <TextValidator 
                value={newColorName}
                variant="filled"
                margin="normal"
                placeholder="Color Name ;)"
                className={classes.colorNameInput}
                name="newColorName"
                onChange={this.handleChange}
                validators={['required','isColorNameUnique', 'isColorUnique']}
                errorMessages={['Enter A Color Name !!' ,'Color Name Must Be Unique !!', 'Color Already Used !!']}
            />
            <Button 
            variant='contained' 
            type='submit'
            color='primary' 
            style={{backgroundColor: PaletteIsFull ? "grey" : currentColor ,
             color: chroma(currentColor).luminance()<= 0.08 ? "white" : "black"
            }}
            disabled={ PaletteIsFull }
            className={classes.addColor}
            >
            {PaletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
          </ValidatorForm>

            </div>
        )
    }
}


export default withStyles(styles) (ColorPickerForm);