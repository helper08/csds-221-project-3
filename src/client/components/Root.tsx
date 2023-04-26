import React from "react";
import PostList from "./PostList";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../client/styles/style.css';

export default class Root extends React.Component<{}> {
    constructor() {
        super({});
    }
    render() {
        document.body.classList.add('body-css');
        return (
            <div className="main-font vh-100 vw-100">
                <PostList />
            </div>
        );
    }
}