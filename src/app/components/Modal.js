import React, {Component} from 'react';

class Modal extends Component {
    render() {
        return (
            <div className="modal">
                <div className="modal-inner">
                    <p className="modal-text">{this.props.text}</p>
                    <button className="btn" onClick={this.props.closeModal}>Exit</button>
                </div>
            </div>
        );
    }
}

export default Modal;