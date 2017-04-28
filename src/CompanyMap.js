import React from 'react';
import Modal from './Modal';
import * as firebase from "firebase";
import * as bootstrap from "react-bootstrap";

import GoogleMap from "react-google-map"
import GoogleMapLoader from "react-google-maps-loader"

import iconMarker from "./assets/marker.svg"
import iconMarkerHover from "./assets/marker_onhover.svg"

class CompanyMap extends React.Component{
    constructor(){
        super();
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.state={
            company: null,
            showModal: false
        };

    }

    readDB(){
        console.log("readDB");
        var companiesRef = firebase.database().ref('company');
        var list = [];
        companiesRef.once('value').then(function(snapshot){
            list = snapshot.val();
            var arr = Object.keys(list).map(function(key){
                return{
                    _id:key,
                    razao: list[key].razao,
                    site: list[key].site,
                    localizacao: list[key].localizacao
                };
            })
            console.log(arr);
            this.setState({company:arr});

        }.bind(this))
    }
    componentWillMount(){
        this.readDB();
    }

    onOpenModal(){
        this.setState({showModal: true});
    }

    onCloseModal(){
        this.setState({showModal: false});
    }

    render(){
        console.log("CompanyMap render");
        console.log(this);
        return (
            <div>
                <bootstrap.Navbar inverse collapseOnSelect fixedTop>
                    <bootstrap.Navbar.Header>
                        <bootstrap.Navbar.Brand>
                            <a href="#">Startup Map</a>
                        </bootstrap.Navbar.Brand>
                        <bootstrap.Navbar.Toggle />
                    </bootstrap.Navbar.Header>
                    <bootstrap.Navbar.Collapse>
                        <bootstrap.Nav>
                            <bootstrap.NavItem eventKey={1} onClick={!this.state.showModal ? this.onOpenModal.bind(this) : this.onCloseModal.bind(this)} >Register Startup</bootstrap.NavItem>
                        </bootstrap.Nav>
                    </bootstrap.Navbar.Collapse>
                </bootstrap.Navbar>
                <Modal showModal={this.state.showModal} />
            </div>
        );
    }


}

/*onClick={this.onOpenModal()}*/
/*<Modal showModal="true" onClose={this.onCloseModal()} />*/
export default CompanyMap;