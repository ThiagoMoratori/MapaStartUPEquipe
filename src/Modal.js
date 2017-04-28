import React, { Component } from 'react';
import * as bootstrap from "react-bootstrap";


class Modal extends React.Component{

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
        this.state = {show:props.showModal};
        console.log("This.STATE___" + props.showModal);
    }

    componentWillReceiveProps(nextProps){
        console.log("Next props" + nextProps.showModal);
        if(this.props != nextProps){
            this.setState({ show: true});
        }
    }

    close (){
       //this.setState({ show: false});
       this.props.onClose;
    }

    render() {
        /*console.log(this.props.showModal);*/
        return (
            <div className="modal-container" style={{height: 200}}>
                    <bootstrap.Modal
                        show={this.props.showModal}
                        onHide={this.close.bind(this)}
                        container={this}
                        aria-labelledby="contained-modal-title"
                    >
                        <bootstrap.Modal.Header closeButton>
                            <bootstrap.Modal.Title id="contained-modal-title">Contained Modal</bootstrap.Modal.Title>
                        </bootstrap.Modal.Header>
                        <bootstrap.Modal.Body>
                            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id
                            earum? Inventore et facilis obcaecati.
                        </bootstrap.Modal.Body>
                        <bootstrap.Modal.Footer>
                            <bootstrap.Button onClick={close}>Close</bootstrap.Button>
                        </bootstrap.Modal.Footer>
                    </bootstrap.Modal>
                }
            </div>
        );
    }
}

export default Modal;