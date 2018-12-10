import React,{Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="ui container">
                <div className="ui menu">
                    <Link to="/" className="header item">
                        Twitch TV
                    </Link>
                    <Link to="/" className="item">
                        Streams
                    </Link>
                    <div className="right menu">
                        <Link to="/" className="item">
                        Login
                        </Link>
                    </div>
                  </div>
            </div>
        );
    }
}

export default Header;