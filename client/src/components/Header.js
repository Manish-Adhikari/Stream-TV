import React,{Component} from "react";
import {Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

class Header extends Component {
    render() {
        return (
            <div className="ui container">
                <div className="ui menu">
                    <Link to="/" className="header item">
                        Twitch TV
                    </Link>
                    <div className="right menu">
                        <Link to="/" className="item">
                          Streams
                        </Link>
                        <GoogleAuth className="item"/>
                    </div>
                  </div>
            </div>
        );
    }
}

export default Header;