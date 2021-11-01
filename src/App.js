import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Diaologs';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setings from "./components/Settings/Setings";


const App = (props) => {
debugger
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}
                                                              addMessage={props.addMessage}
                                                              newMessage={props.state.dialogsPage.newMessageText}
                                                              updateMessage={props.updateMessage}

                />}/>

                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    addPost={props.addPost}
                    updatePost={props.updatePost}
                />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Setings}/>
            </div>
        </div>

    );
}


export default App;
