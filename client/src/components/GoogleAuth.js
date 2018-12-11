import React from "react";

class GoogleAuth extends React.Component {
    state = {isSigned: null};
    
    componentDidMount = () => {
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init(
                {
                    clientId:'268617612362-tten0sc7mp9nc3mdt4sst16r4mh3lhhq.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.setState({
                        isSigned: this.auth.isSignedIn.get()
                    });
                    this.auth.isSignedIn.listen(this.onAuthChange);
                })
        });        
    }

    onAuthChange = () => {
        this.setState({
            isSigned: this.auth.isSignedIn.get()
        });
    }
    
    googleAuthButton = () => {
        console.log(this.state.isSigned);
        if(this.state.isSigned === null) {
            return null;
        }
        else if(this.state.isSigned === true) {
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

export default GoogleAuth;