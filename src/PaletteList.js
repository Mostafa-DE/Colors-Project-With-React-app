import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withStyles } from '@material-ui/core/styles';
import { Dialog } from '@material-ui/core';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteList';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
class PaletteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDeleteDialog: false,
            deletingId: ""
        };
        this.closeDialog = this.closeDialog.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.goToPalette = this.goToPalette.bind(this);
    }
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }

    openDialog(id) {
        this.setState({openDeleteDialog: true, deletingId: id});
    }

    closeDialog() {
        this.setState({openDeleteDialog: false, deletingId: ""});
    }

    handleDelete() {
        this.props.deletePalette(this.state.deletingId);
        this.setState({openDeleteDialog: false});
    }

    render() {
        const { Palettes, classes } = this.props;
        const { openDeleteDialog } = this.state;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.heading}> React Colors Demo!!</h1>
                        <Link to="/palette/new">Create New Palette 😎 </Link>
                    </nav>
                    
                        <TransitionGroup className={classes.palettes}>
                            {Palettes.map(p => (
                                <CSSTransition key={p.id} classNames='fade' timeout={500}>
                                    <MiniPalette 
                                        key={p.id}
                                        id={p.id}
                                        openDialog={this.openDialog}
                                        {...p} 
                                        goToPalette={this.goToPalette}
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    
                </div>
                <Dialog 
                    open={openDeleteDialog} 
                    aria-labelledby="delete-dialog-title" 
                    onClose={this.closeDialog}
                >
                    <DialogTitle id="delete-dialog-title">Are you sure ?!!</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete}>
                            <ListItemAvatar >
                                <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>Yes, I'm Sure </ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.closeDialog}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>No, I'm Kidding </ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles) (PaletteList);
