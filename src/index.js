import React from 'react';
import state, {subscribe} from "./REDUX/state";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost, updateMessage, updatePost} from "./REDUX/state";
import './index.css';
import ReactDOM from "react-dom";



let rerenderEntireTree=()=>{ReactDOM.render(
        <React.StrictMode>
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updatePost={updatePost}
                 addMessage={addMessage}
                 updateMessage={updateMessage}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);

export  default  rerenderEntireTree;
