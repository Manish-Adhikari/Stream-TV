import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
import StreamList from "./stream/StreamList";
import StreamCreate from "./stream/StreamCreate";
import StreamEdit from "./stream/StreamEdit";
import StreamDelete from "./stream/StreamDelete";
import StreamShow from "./stream/StreamShow";

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/streams/new" exact component={StreamCreate}/>
                        <Route path="/streams/edit" exact component={StreamEdit}/>
                        <Route path="/streams/delete" exact component={StreamDelete}/>
                        <Route path="/streams/show" exact component={StreamShow}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;