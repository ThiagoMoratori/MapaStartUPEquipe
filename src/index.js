/* global google */
import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from "firebase";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Routes from './routes'

class App extends React.Component {
    constructor(props) {
        super(props);
        var config = {
            apiKey: "AIzaSyBr9wGS-JzixSHSMJpdVXGz-DyUPjlNdNg",
            authDomain: "mapa-de-startup.firebaseapp.com",
            databaseURL: "https://mapa-de-startup.firebaseio.com",
            projectId: "mapa-de-startup",
            storageBucket: "mapa-de-startup.appspot.com",
            messagingSenderId: "562968674625"
        };
        firebase.initializeApp(config);
        console.log("Firebase Inicializado!");
    }

    render() {
        console.log("app render");
        return (
            <div className="container">
                <Routes/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />
    ,
    document.getElementById('root')
);
/*<div className="container">

    <Routes/>
</div>*/