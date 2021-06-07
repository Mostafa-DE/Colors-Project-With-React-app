import React, { Component } from 'react'
import './colorBox.css';
import { CopyToClipboard }  from 'react-copy-to-clipboard';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        };
        this.changeCopystate = this.changeCopystate.bind(this);
    }

    changeCopystate() {
        this.setState({copied: true} , () => {
           setTimeout( () => this.setState({copied:false}), 1500); 
        });
    }

    render() {
        const { name, background } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopystate}>
            <div style={{background: background}} className="ColorBox">
                {/* Single div */}<div style={{background: background}} className={copied === true ? 'copy-overlay show' : 'copy-overlay'} />
                <div className={copied === true ? 'copy-msg show' : 'copy-msg'}>
                    <h1>Copied!!</h1>
                    <p>{this.props.background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                        <button className="copy-btn">Copy!!</button> 
                </div>
                <span className="see-more">more</span>
            </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;