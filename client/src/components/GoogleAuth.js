import React from "react";
import {connect} from "react-redux";
import {signIn} from "../actions";
import {signOut} from "../actions";

class GoogleAuth extends React.Component {
    
    componentDidMount = () => {
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init(
                {
                    clientId:'268617612362-tten0sc7mp9nc3mdt4sst16r4mh3lhhq.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get())
                    this.auth.isSignedIn.listen(this.onAuthChange);
                })
        });        
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else {
            this.props.signOut();
        }
    }
    
    googleAuthButton = () => {

        if(this.props.isSignedIn === null) {
            return null;
        }
        else if(this.props.isSignedIn === true) {
            return (
            <button onClick = {this.signOutUser} className = "ui red google button">
                <i className="google icon"/>
                    Sign Out
            </button>
            );
        }
        else {
            return (
                <button onClick = {this.signInUser} className = "ui red google button">
                    <i className="google icon"/>
                        Sign In With Google
                </button>
                );
        }
    }

    signInUser = () => {
        this.auth.signIn();
    }

    signOutUser = () => {
        this.auth.signOut();
    }

    render() {
        return <div>{this.googleAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);