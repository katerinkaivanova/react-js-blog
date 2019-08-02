import React, {Component} from 'react';

import Modal from "./Modal";

export default class WelcomeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
        console.log('1. constructor works');
        console.log(this.state.display);
    }

    toggleDisplay() {
        this.setState({
            display: !this.state.display
        });
    }

    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps works');
        console.log(state.display);
        return null;
    }

    render() {
        const popupText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Aspernatur consectetur corporis error fugiat inventore labore nesciunt nostrum reprehenderit, ullam. ' +
            'Accusantium assumenda aut facere, ipsam molestias neque omnis quam tempore. Maiores.';

        console.log('3. render works');
        console.log(this.state.display);

        return (
            <div>
                {this.state.display ?
                    <Modal text={popupText} closeModal={this.toggleDisplay.bind(this)}/>
                    : null
                }
            </div>
        );
    }

    componentDidMount() {
        console.log('4. componentDidMount works');
        {
            this.toggleDisplay()
        }
        console.log(this.state.display);
    }
}

